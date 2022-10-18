const { Post } = require('../models');

const postData = [
    {
        name: 'Top Games of 2022',
        description: 'the top games of 2022 are: Apex legends, Minecraft, Call of Duty, Overwatch 2.',
    },
    {
        name: 'New smartphone',
        description: "The newest smartphone is set to be released during next Wednesday's press conference."
    },
    {
        name: "New Operating system geared towards",
        description: "a brand new operationg system is going to be released at the end of the year"
    },
    {
        name: "test",
        description: "This is the test to make sure that the development is on track"
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;