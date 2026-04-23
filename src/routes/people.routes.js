const express = require('express');
const router = express.Router();

const {
  addPerson,
  getPeople
} = require('../controllers/people.controller');

router.post('/addPerson', addPerson);
router.get('/getPeople', getPeople);

module.exports = router;