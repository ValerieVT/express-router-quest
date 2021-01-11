const express = require('express');
const allTags = require('../data/tags');
const allPosts = require('../data/posts');

const router = express.Router();

// Get a list of tags
router.get('/', (req, res) => {
  res.json(allTags);
});

// Bonus: get a list of posts related to a special tag id
router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundTag = allPosts.filter((post) => post.tags_id.includes(tagId));
  if (!foundTag) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundTag);
});

module.exports = router;
