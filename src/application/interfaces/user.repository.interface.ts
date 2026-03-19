import { User } from "../../domain/entities/user.entity";


export interface IUserRepository{
    save(user : User) : Promise<User>
    findByEmail(email : String) : Promise<User | null>
}