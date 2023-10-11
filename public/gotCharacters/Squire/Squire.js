import Character from "../Characters/Characters.js";

class Squire extends Character {
  squiresFor;
  bootLickingLevel;

  communicate() {
    return `${super.communicate} I am a loser`;
  }
}

export default Squire;
