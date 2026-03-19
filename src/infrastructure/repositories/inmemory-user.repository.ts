import { IUserRepository } from "../../application/interfaces/user.repository.interface";
import { User } from "../../domain/entities/user.entity";


export class InMemoryUserRepository implements IUserRepository {

    private users: User[] = []

    async save(user: User): Promise<User> {
        this.users.push(user);
        console.log("Uses : " , this.users)
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(u => u.email === email);
        return user || null;
    }
}


