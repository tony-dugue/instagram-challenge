import users from "./users";

export const posts = [
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[0].pseudo,
    likes: 7868,
    caption: "Oeufs frais de la ferme",
    profile_picture: users[0].image,
    comments: [
      { user: "the_dude", comment: "J'adore les oeufs !!" },
      { user: "atomicbomber", comment: "Wow, ça fait beaucoup d'oeufs 🥚" },
      { user: "holycow", comment: "Je ne suis pas sûr de pouvoir manger tout ça 😜" },
      { user: "the_dude", comment: "J'adore les oeufs" },
      { user: "atomicbomber", comment: "Wow, ça fait beaucoup d'oeufs 🥚" },
      { user: "holycow", comment: "Je ne suis pas sûr de pouvoir manger tout ça" },
      { user: "the_dude", comment: "J'adore les oeufs" },
      { user: "atomicbomber", comment: "Wow, ça fait beaucoup d'oeufs 🥚" },
      { user: "holycow",  comment: "Je ne suis pas sûr de pouvoir manger tout ça" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[1].pseudo,
    likes: 1022,
    caption: "je suis un grand fan de ça",
    profile_picture: users[1].image,
    comments: [
      { user: "marksomebody", comment: "j'adore vraiment tes messages" },
      { user: "hannahbanana", comment: "grovy J'ai hâte d'en voir plus" },
      { user: "amandapineapple", comment: "whats up" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[2].pseudo,
    likes: 1778972,
    caption: "je suis un grand fan de ça",
    profile_picture: users[2].image,
    comments: [
      { user: "marksomebody", comment: "j'adore vraiment tes messages" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[3].pseudo,
    likes: 179,
    caption: "I'm a big fan of this",
    profile_picture: users[3].image,
    comments: [
      { user: "marksomebody", comment: "j'adore vraiment tes messages" },
      { user: "hannahbanana", comment: "grovy J'ai hâte d'en voir plus" },
      { user: "amandapineapple", comment: "whats up" },
    ],
  },
  {
    imageUrl: require("../assets/posts/post-placeholder.png"),
    user: users[4].pseudo,
    likes: 14879,
    caption: "je suis un grand fan de ça",
    profile_picture: users[3].image,
    comments: [],
  },
];

export default posts
