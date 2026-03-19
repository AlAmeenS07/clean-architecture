import express from "express"
import { InMemoryUserRepository } from "../../infrastructure/repositories/inmemory-user.repository"
import { CreateUserUseCase } from "../../application/use-cases/create-user.usecase"
import { UserController } from "../controllers/user.controller"

const router = express.Router()

const userRepo = new InMemoryUserRepository()
const userUseCase = new CreateUserUseCase(userRepo)
const userController = new UserController(userUseCase)

router.post("/create" , (req , res)=> userController.create(req , res))

export default router