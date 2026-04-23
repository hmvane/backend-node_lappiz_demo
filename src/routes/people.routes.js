const express = require("express");
const router = express.Router();
const controller = require("../controllers/people.controller");

router.get("/getPeople", controller.getPeople);
router.post("/addPerson", controller.addPerson);

module.exports = router;