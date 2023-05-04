const express = require('express');
const { getPublic } = require('../controllers/publicController');
const publicRouter = express.Router();

publicRouter.get("/", getPublic);
publicRouter.get("/about", getPublic);

module.exports = publicRouter;