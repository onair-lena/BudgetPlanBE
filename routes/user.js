const Router = require('express');
const router = new Router();
const userController = require('../controllers/useerController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.isAuth);

module.exports = router;
