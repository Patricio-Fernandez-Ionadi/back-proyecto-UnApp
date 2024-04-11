import { Router } from 'express'
import { UserController } from '../controllers/index.js'

export const userRouter = Router()

const user_controller = UserController

userRouter.get('/', user_controller.getAll)
