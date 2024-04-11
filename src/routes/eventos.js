import { Router } from 'express'
import { EventosController } from '../controllers/index.js'

export const eventosRouter = Router()

const eventos_controller = EventosController

eventosRouter.get('/', eventos_controller.getAll)
