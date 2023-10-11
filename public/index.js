import Character from "./gotCharacters/Characters/Characters.js";
import King from "./gotCharacters/King/King.js";
import Fighter from "./gotCharacters/Fighter/Fighter.js";
import Advisor from "./gotCharacters/Advisor/Advisor.js";
import Squire from "./gotCharacters/Squire/Squire.js";

const joffreyBaratheon = new King("Joffrey", "Baratheon", 15, true, 1);

const jaimeLannister = new Fighter("Jaime", "Lannister", 30, true, "Sword", 9);

const daenerysTargaryen = new Fighter(
  "Daenarys",
  "Targaryen",
  32,
  true,
  "Cane",
  3,
);

const tyrionLannister = new Advisor(
  "Tyrion",
  "Lannister",
  40,
  true,
  daenerysTargaryen.name,
);

const bronn = new Squire(
  "Jaime",
  "Lannister",
  30,
  true,
  jaimeLannister.name,
  3,
);

console.log(joffreyBaratheon);
console.log(jaimeLannister);
console.log(daenerysTargaryen);
console.log(tyrionLannister);
console.log(bronn);

console.log(tyrionLannister.communicate());
