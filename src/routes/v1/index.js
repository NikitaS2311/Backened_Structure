const express = require('express');
const router = express.Router();
const{InfoController} = require('../../controllers');

// const router = express.Router();

router.get('/info', InfoController.info);


module.exports = router;