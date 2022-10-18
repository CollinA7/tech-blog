const router = require('express').Router();
const { Post } = require('../models');

router.get('/', (req, res) => {
    // const dbPostData = Post.findAll({
    //     include: [
    //         {
    //             model: Post
    //         }
    //     ]
    // });

    // const posts = dbPostData.map((post) => 
    //     post.get({ plain: true })
    // );

    // res.render('homepage', {
    //     posts,
    // });
    res.render('homepage')
})



module.exports = router;