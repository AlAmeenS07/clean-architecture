import { User } from "../../domain/entities/user.entity";
import { USER_ALREADY_EXIST } from "../../utils/constants";
import { IUserRepository } from "../interfaces/user.repository.interface";


export class CreateUserUseCase {
    constructor(private _userRepo: IUserRepository) { }

    async execute(name: string, email: string, password: string, phone: string): Promise<User> {

        // check user exists
        
        const existUser = await this._userRepo.findByEmail(email)

        if (existUser) {
            throw new Error(USER_ALREADY_EXIST)
        }

        // create entity
        const user = new User(
            Date.now().toString(),
            name,
            email,
            password,
            phone
        );

        // save user
        return await this._userRepo.save(user);

    }
}