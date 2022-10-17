const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    const dbPostData = await Post.findAll({
        include: [
            {
                model: Post
            }
        ]
    })
})

module.exports = router;