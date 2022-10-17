const { User } = require('../models');

const userData = [
    {
        username: 'Ron Stevens',
        email: 'ron@email.com',
    },
    {
        username: 'John Roy',
        email: 'royjohn@email.com'
    },
    {

    },
    {

    }
];

const seedUsers = () => User.bulkCreate(postData);

module.exports = seedUsers