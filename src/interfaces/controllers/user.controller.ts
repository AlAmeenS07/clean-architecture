import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/create-user.usecase";
import { BAD_REQUEST, CREATED, USER_CREATED_SUCCESSFULLY } from "../../utils/constants";

export class UserController {

    constructor(private _createUserUseCase: CreateUserUseCase) { }

    async create(req: Request, res: Response) {
        try {
            const { name, email, password, phone } = req.body;

            const user = await this._createUserUseCase.execute(
                name,
                email,
                password,
                phone
            );

            res.status(CREATED).json({
                success : true,
                message : USER_CREATED_SUCCESSFULLY,
                user : user
            });

        } catch (error: any) {
            res.status(BAD_REQUEST).json({ success : false , message: error.message });
        }
    }

}