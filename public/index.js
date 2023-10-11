import Character from "./gotCharacters/Characters/Characters.js";
import King from "./gotCharacters/King/King.js";
import Fighter from "./gotCharacters/Fighter/Fighter.js";

const gorCharacter = new Character();

const jaimeLannister = new King();

const daenerysTargaryen = new Fighter();

console.log(gorCharacter);
console.log(jaimeLannister.communicate());
console.log(daenerysTargaryen.communicate());
