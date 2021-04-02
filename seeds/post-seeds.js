const {Post} = require("../models");

const postData = [
    {
        title: "Lorem Ipsum 1",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor. Viverra accumsan in nisl nisi scelerisque eu. Duis at tellus at urna condimentum. Malesuada nunc vel risus commodo viverra. Augue interdum velit euismod in pellentesque massa placerat. Libero volutpat sed cras ornare arcu dui vivamus arcu. In eu mi bibendum neque egestas congue quisque egestas diam. Id diam maecenas ultricies mi eget mauris pharetra et. Sit amet massa vitae tortor condimentum lacinia quis. Nisl pretium fusce id velit ut tortor. Tincidunt ornare massa eget egestas purus viverra",
        user_id: 1
    },
    {
        title: "Lorem Ipsum 2",
        post_content: "Laoreet non curabitur gravida arcu ac tortor. Ullamcorper a lacus vestibulum sed arcu non odio. Phasellus egestas tellus rutrum tellus pellentesque. Natoque penatibus et magnis dis. Magna eget est lorem ipsum dolor sit amet consectetur. Leo vel orci porta non pulvinar neque. Id porta nibh venenatis cras. Diam vel quam elementum pulvinar etiam non quam. Ac tincidunt vitae semper quis lectus nulla at volutpat. Quis blandit turpis cursus in hac habitasse platea. Nec nam aliquam sem et tortor. Velit scelerisque in dictum non consectetur. Et sollicitudin ac orci phasellus egestas. Leo in vitae turpis massa sed elementum. Euismod quis viverra nibh cras pulvinar. Amet dictum sit amet justo donec.",
        user_id: 2
    },
    {
        title: "Lorem Ipsum 3",
        post_content: "Mi quis hendrerit dolor magna eget est. Pellentesque nec nam aliquam sem et. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Diam ut venenatis tellus in metus vulputate eu scelerisque. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Elementum nisi quis eleifend quam adipiscing vitae proin. Et tortor consequat id porta nibh venenatis cras. Sed sed risus pretium quam vulputate dignissim suspendisse. In nisl nisi scelerisque eu ultrices. Vitae suscipit tellus mauris a diam maecenas. A diam sollicitudin tempor id eu nisl nunc mi.",
        user_id: 3
    },
    {
        title: "Lorem Ipsum 4",
        post_content: "Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Fames ac turpis egestas maecenas pharetra convallis. Sed elementum tempus egestas sed sed risus. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Commodo quis imperdiet massa tincidunt nunc. Aliquet nec ullamcorper sit amet risus nullam eget. Vitae ultricies leo integer malesuada nunc. Sit amet purus gravida quis blandit turpis cursus in hac. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Mattis pellentesque id nibh tortor id aliquet. Pharetra vel turpis nunc eget lorem dolor sed viverra. Netus et malesuada fames ac turpis egestas sed tempus. Elit at imperdiet dui accumsan sit amet. Habitant morbi tristique senectus et netus et malesuada fames ac.",
        user_id: 4
    },
    {
        title: "Lorem Ipsum 5",
        post_content: "Varius quam quisque id diam vel quam elementum. Nunc aliquet bibendum enim facilisis gravida neque. Ornare lectus sit amet est placerat in. Ipsum dolor sit amet consectetur adipiscing elit duis. Nulla malesuada pellentesque elit eget gravida cum sociis. Commodo viverra maecenas accumsan lacus. Porta nibh venenatis cras sed felis eget velit. Neque laoreet suspendisse interdum consectetur libero. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Fermentum dui faucibus in ornare quam. Curabitur gravida arcu ac tortor. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Integer vitae justo eget magna fermentum iaculis eu. Semper auctor neque vitae tempus quam pellentesque nec nam.",
        user_id: 5
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
