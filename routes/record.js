const Router = require('express');
const router = new Router();
const recordController = require('../controllers/recordController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, recordController.create);
router.get('/', authMiddleware, recordController.getAll);
router.get('/:id', authMiddleware, recordController.getOne);
router.delete('/:id', authMiddleware, recordController.delete);

module.exports = router;
