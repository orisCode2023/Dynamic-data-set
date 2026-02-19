import express from 'express';
import { tdController } from '../controllers/terrorData.controllers.js';

const tdRouter = express.Router()

tdRouter.get('/', tdController)


export default tdRouter