import db from "../db/connection.js";
import Cat from "../models/Cat.js";
//just a seed file to put data into the db
const insertData = async () => {
  // Reset the database
  await db.dropDatabase();

  const cats = [
    {
      name: "Cherie",
      aka: "First-born",
      bio: "I love cuddles, but only in the bathroom. My favorite acitivty is following my human around, but never let them touch me.",
      age: 2,
      gender: "female",
      species: "short-hair",
      likesCuddles: true,
      image: "https://i.ibb.co/0YzKQYV/cherie.jpg",
    },
    {
      name: "Charlotte",
      aka: "Charlie",
      bio: "Don't ever pick me up...like...ever. I enjoy staring at my human, playing with my toys, and randomly playing with ice cubes.",
      age: 2,
      gender: "female",
      species: "medium-hair",
      likesCuddles: false,
      image: "https://i.ibb.co/2FwtcDs/charlie.jpg",
    },
    {
      name: "Milo",
      aka: "Fluffs",
      bio: "I like to chase my sisters around and meeting new people. My favorite pasttime is waiting for a food deliver so that I can run out of the apartment as soon as the door opens.",
      age: 5,
      gender: "male",
      species: "siberian",
      likesCuddles: true,
      image:
        "https://images.ctfassets.net/s7r1h98f1v8b/29Vd3oPzwffzqvKavDaSMe/e4496fa5c84feb044447730037c0bb78/siberian_cat.jpg",
    },
    {
      name: "Calcifer",
      aka: "Bunny",
      bio: "I am very selective about who and when I give cuddles to, but I am the sweetest angel who can do no wrong",
      age: 3,
      gender: "male",
      species: "short-hair",
      likesCuddles: false,
      image: "https://i.imgur.com/kGArJAF.jpg",
    },
  ];

  // Insert Data
  await Cat.create(cats);

  console.log("Cats have entered the Database!");

  // Close the DB
  await db.close();
};

insertData();
