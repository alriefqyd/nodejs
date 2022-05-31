const { Router } = require('express');
const req = require('express/lib/request');
const controller = require('./controller');
 
const router = Router();

router.get('/', controller.getStudents)

module.exports = router;