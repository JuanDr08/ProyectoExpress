const express = require('express');
const WorkshopController = require('../controllers/workshopController.cjs');

const router = express.Router({ mergeParams: true });
const workshopController = new WorkshopController()

router.get("/workshops", (req, res) => workshopController.getAllWorkshops(req, res))


module.exports = router