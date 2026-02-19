import express from 'express'
import { getScoreController } from '../controllers/score.controllers.js'


const scoreRouter = express.Router()

scoreRouter.post('/', getScoreController)

export default scoreRouter