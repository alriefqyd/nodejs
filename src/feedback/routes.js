const { Router } = require('express');
const controller = require('./controller');
 
const router = Router();

router.get('/', controller.getFeedback)

module.exports = router;