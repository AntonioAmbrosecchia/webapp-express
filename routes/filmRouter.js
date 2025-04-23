const express = require('express');
const router = express.Router();
const { getAllFilms, getFilmDetails } = require('../controllers/filmController');

router.get('/', getAllFilms);
router.get('/:id', getFilmDetails);

module.exports = router;
