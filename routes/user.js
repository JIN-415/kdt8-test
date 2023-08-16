//router
import express from 'express';
import * as controller from '../controller/CUser.js';
const router = express.Router();

//GET localhost:8000/user/
router.get('/', controller.index);
//GET localhost:8000/signup
router.get('/signup', controller.signup);
// //POST localhost:8000/signup
router.post('/signup', controller.post_signup);
//GET localhost:8000/signin
router.get('/signin', controller.signin);
// //POST localhost:8000/signin
router.post('/signin', controller.post_signin);

router.post('/profile', controller.post_profile);
router.patch('/profile/edit', controller.edit_profile);
router.delete('/profile/delete', controller.delete_profile);

export default router;
