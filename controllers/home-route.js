const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }

    res.render('login');
});



module.exports = router;