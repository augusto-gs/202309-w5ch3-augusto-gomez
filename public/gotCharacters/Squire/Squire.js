import Character from "../Characters/Characters.js";

class Squire extends Character {
  squiresFor;
  bootLickingLevel;

  constructor(name, family, age, isAlive, squiresFor, bootLickingLevel) {
    super(name, family, age, isAlive, squiresFor, bootLickingLevel);
    this.squiresFor = squiresFor;
    this.bootLickingLevel = bootLickingLevel;
  }

  communicate() {
    return `${super.communicate} I am a loser`;
  }
}

export default Squire;
