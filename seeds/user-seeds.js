const {User} = require("../models");

const userData = [
    {
        username: "khloe_kardashian",
        github: "khloek",
        email: "khloe_k@yahoo.com",
        password: "ilovekim"
    },
    {
        username: "koutney_kardashian",
        github: "kourtk",
        email: "kourt_k@yahoo.com",
        password: "ilovescott"
    },
    {
        username: "kim_kardashian",
        github: "kimk",
        email: "kim_k@yahoo.com",
        password: "idontlovekanye"
    },
    {
        username: "kylie_jenner",
        github: "kyliej",
        email: "kylie_j@yahoo.com",
        password: "ilovestormi"
    },
    {
        username: "kendall_jenner",
        github: "kendallk",
        email: "kendall_j@yahoo.com",
        password: "ilovemodels"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
