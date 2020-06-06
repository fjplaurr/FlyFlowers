const express = require('express');
const getAllDocuments = require('../utils/commons');
const Flower = require('../models/flower');

const router = express.Router();

router.get('/', getAllDocuments(Flower));

module.exports = router;