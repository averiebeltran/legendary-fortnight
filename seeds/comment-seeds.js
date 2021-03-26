const {Comment} = require("../models");

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Similique sunt in culpa qui officia deserunt mollitia animi"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Impedit quo minus id quod maxime placeat facere possimus"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Itaque earum rerum hic tenetur a sapiente delectus"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_text: "Qquo minus id quod maxime placeat facere possimus"
    },
]

const seedUsers = () => Comment.bulkCreate(commentData);

module.exports = seedUsers;
