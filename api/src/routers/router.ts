import { Router } from 'express'
import { erroBodyLogin, erroBodyRegister } from '../middleware/users/errorBody'
import { isLoggedin } from '../middleware/users/user.auth'
import { erroBodyGame } from '../middleware/games/gamesBody'
import { erroBodyPostProfile, erroBodyProfile } from '../middleware/profile/profileBody'
import { verifyPostOwnership } from '../middleware/profile/authVerify'
import { erroBodyComment } from '../middleware/comment/comment'
import { erroBodySuggestion } from '../middleware/suggestion/suggestion'

const userController = require('../controllers/userController/user')
const playController = require('../controllers/playController/playGames')
const chatbot = require('../controllers/chatbotController/chtabot')
const profileController = require('../controllers/profileController/profile')
const postProfileController = require('../controllers/profileController/post')
const feedController = require('../controllers/feedController/feed')
const likeController = require('../controllers/likeController/like')
const commenteController = require('../controllers/commentController/comment')
const suggestionController = require('../controllers/suggestionController/suggestion')

const routers = Router();

routers.post('/login', erroBodyLogin, userController.login)
routers.get('/register', userController.getRegister)
routers.post('/register', erroBodyRegister, userController.register)

routers.post('/chatbot', isLoggedin, chatbot.handleChatbot)

routers.get('/playgames', isLoggedin, playController.getPlayGames)
routers.post('/playgames', erroBodyGame, isLoggedin, playController.sendPlayGames)
routers.put('/playgames/:id', erroBodyGame, isLoggedin, playController.updatePlayGames)
routers.delete('/playgames/:id', isLoggedin, playController.deletePlayGames)


routers.get('/myprofile', isLoggedin, verifyPostOwnership, profileController.getMyProfile)
routers.get('/profile/:user_name', isLoggedin, profileController.getProfile)
routers.put('/profile', erroBodyProfile, isLoggedin, profileController.updateProfile)
routers.delete('/profile', isLoggedin, profileController.deleteProfile)

routers.get('/profile/post/liked', isLoggedin, profileController.getPostLiked)
routers.get('/profile/post/commented', isLoggedin, profileController.getPostCommented)

routers.get('/profile/post/:id', isLoggedin, postProfileController.getPost)
routers.post('/profile/post', isLoggedin, verifyPostOwnership, erroBodyPostProfile, postProfileController.setPost)
routers.put('/profile/post/edit/:post_id', isLoggedin, verifyPostOwnership, erroBodyPostProfile, postProfileController.updatePost)
routers.delete('/profile/post/delete/:post_id', isLoggedin, verifyPostOwnership, postProfileController.deletePost)

routers.get('/feed', isLoggedin, feedController.getFeed)

routers.post('/liked/:post_id', isLoggedin, verifyPostOwnership, likeController.setLike)
routers.get('/commented/:post_id', isLoggedin, verifyPostOwnership, commenteController.getComment)
routers.post('/commented/:post_id', isLoggedin, verifyPostOwnership, erroBodyComment, commenteController.setComment)
routers.delete('/commented/:post_id', isLoggedin, verifyPostOwnership, commenteController.deleteComment)

routers.get('/suggestion', isLoggedin, verifyPostOwnership, suggestionController.getSuggestion)
routers.post('/suggestion', isLoggedin, verifyPostOwnership, erroBodySuggestion, suggestionController.setSuggestion)
routers.delete('/suggestion/:id', isLoggedin, suggestionController.deleteSuggestion)

export default routers;
