const { Post } = require('../models');

const postData = [
    {
        name: 'top games 2022',
        description: 'the top games of 2022 are: Apex legends, Minecraft, Call of Duty, Overwatch 2.',
    
    },
    {

    },
    {

    },
    {

    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;