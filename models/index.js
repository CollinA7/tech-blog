const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'post_id'
});

Post.hasMany(User, {
    foreignKey: 'post_id'
})
