const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id'
});

User.hasMany(Comment, {
    foreignKey: 'comment_id'
});

User.hasMany(Post, {
    foreignKey: 'post_id'
});

module.exports = {Comment, Post, User};