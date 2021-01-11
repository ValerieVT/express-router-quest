const express = require('express');
const postsTags = require('../data/tags');

const router = express.Router();

// Get a list of tags
router.get('/', (req, res) => {
  res.json(postsTags);
});

module.exports = router;
