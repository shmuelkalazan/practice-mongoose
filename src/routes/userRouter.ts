import { register } from '../controllers/userController'
import exp from 'express'
const router = exp.Router()
// register new user
router.post('/register',register)
// get all users
router.post('/getall',()=>{})
// get one user
router.post('/getuser',()=>{})
module.exports = router;
