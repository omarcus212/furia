import { Router, Request, Response } from 'express'
import { erroBodyLogin, erroBodyRegister } from '../middleware/users/errorBody'
import { isLoggedin } from '../middleware/users/user.auth'
import { erroBodyGame } from '../middleware/games/gamesBody'

const userController = require('../controllers/userController/user')
const playController = require('../controllers/playController/playGames')
const chatbot = require('../controllers/chatbotController/chtabot')

const routers = Router();

routers.post('/login', erroBodyLogin, userController.login)
routers.get('/register', userController.getRegister)
routers.post('/register', erroBodyRegister, userController.register)

routers.post('/chatbot', isLoggedin, chatbot.handleChatbot)

routers.get('/playgames', isLoggedin, playController.getPlayGames)
routers.post('/playgames', erroBodyGame, isLoggedin, playController.sendPlayGames)
routers.put('/playgames/:id', erroBodyGame, isLoggedin, playController.updatePlayGames)
routers.delete('/playgames/:id', isLoggedin, playController.deletePlayGames)


export default routers;
