import Character from "../Characters/Characters.js";

class King extends Character {
  yearsOfRule;

  constructor(name, family, age, isAlive, yearsOfRule) {
    super(name, family, age, isAlive, yearsOfRule);
    this.yearsOfRule = yearsOfRule;
  }

  communicate() {
    return `${super.communicate} You are all going to die`;
  }
}

export default King;
