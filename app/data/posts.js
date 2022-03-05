import users from "./users";

export const posts = [
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[0].pseudo,
    likes: 7868,
    caption: "farm fresh eggs",
    profile_picture: users[0].image,
    comments: [
      { user: "the_dude", comment: "I like eggs" },
      { user: "atomicbomber", comment: "Wow, that's a lot of eggs 🥚" },
      { user: "holycow", comment: "I'm not sure I can eat that" },
      { user: "the_dude", comment: "I like eggs" },
      { user: "atomicbomber", comment: "Wow, that's a lot of eggs 🥚" },
      { user: "holycow", comment: "I'm not sure I can eat that" },
      { user: "the_dude", comment: "I like eggs" },
      { user: "atomicbomber", comment: "Wow, that's a lot of eggs 🥚" },
      { user: "holycow",  comment: "I'm not sure I can eat that" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[1].pseudo,
    likes: 1022,
    caption: "I'm a big fan of this",
    profile_picture: users[1].image,
    comments: [
      { user: "marksomebody", comment: "totally loving ur posts" },
      { user: "hannahbanana", comment: "grovy can't wait to see more" },
      { user: "amandapineapple", comment: "whats up" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[2].pseudo,
    likes: 1778972,
    caption: "I'm a big fan of this",
    profile_picture: users[2].image,
    comments: [
      { user: "marksomebody", comment: "totally loving ur posts" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[3].pseudo,
    likes: 179,
    caption: "I'm a big fan of this",
    profile_picture: users[3].image,
    comments: [
      { user: "marksomebody", comment: "totally loving ur posts" },
      { user: "hannahbanana", comment: "grovy can't wait to see more" },
      { user: "amandapineapple", comment: "whats up" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[4].pseudo,
    likes: 14879,
    caption: "You're a big fan of this",
    profile_picture: users[3].image,
    comments: [],
  },
];

export default posts
