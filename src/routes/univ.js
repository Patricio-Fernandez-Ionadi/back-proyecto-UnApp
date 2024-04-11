import { Router } from 'express'
import { UniversidadesController } from '../controllers/index.js'

export const univRouter = Router()

const univ_controller = UniversidadesController

univRouter.get('/', univ_controller.getAll)
