import { Router } from 'express'
import { LibrosController } from '../controllers/index.js'

export const librosRouter = Router()

const libros_controller = LibrosController

librosRouter.get('/', libros_controller.getAll)
