const express = require('express');
const { dashboardController } = require('../controllers/dashboardController');


const dashboardRouter = express.Router();

dashboardRouter.get('/', dashboardController);

module.exports.dashboardRouter = dashboardRouter;