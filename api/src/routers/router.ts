import { Router, Request, Response } from 'express'
import { erroBodyLogin, erroBodyRegister } from '../middleware/users/errorBody'
import { isLoggedin } from '../middleware/users/user.auth'
import { erroBodyGame } from '../middleware/games/gamesBody'
import { erroBodyProfile } from '../middleware/profile/profileBody'

const userController = require('../controllers/userController/user')
const playController = require('../controllers/playController/playGames')
const chatbot = require('../controllers/chatbotController/chtabot')
const profileController = require('../controllers/profileController/profile')

const routers = Router();

routers.post('/login', erroBodyLogin, userController.login)
routers.get('/register', userController.getRegister)
routers.post('/register', erroBodyRegister, userController.register)

routers.post('/chatbot', isLoggedin, chatbot.handleChatbot)

routers.get('/playgames', isLoggedin, playController.getPlayGames)
routers.post('/playgames', erroBodyGame, isLoggedin, playController.sendPlayGames)
routers.put('/playgames/:id', erroBodyGame, isLoggedin, playController.updatePlayGames)
routers.delete('/playgames/:id', isLoggedin, playController.deletePlayGames)

routers.get('/profile/:id', isLoggedin, profileController.getProfile)
routers.put('/profile', erroBodyProfile, isLoggedin, profileController.updateProfile)
routers.delete('/profile/:id', isLoggedin, profileController.deleteProfile)


export default routers;
