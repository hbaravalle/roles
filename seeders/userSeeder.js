const { User } = require("../models");

async function userSeeder() {
  const users = [
    { email: "leia@starwars.com", firstname: "Leia", lastname: "Organa" },
    { email: "luke@starwars.com", firstname: "Luke", lastname: "Skywalker" },
    { email: "han@starwars.com", firstname: "Han", lastname: "Solo" },
    { email: "obiwan@starwars.com", firstname: "Obi-Wan", lastname: "Kenobi" },
  ];

  await User.bulkCreate(users);
  console.log("[Seeders] Se han creado algunos usuarios de prueba");
}

userSeeder();
