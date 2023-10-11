import Character from "../Characters/Characters.js";

class Fighter extends Character {
  weaponfOfChoice;
  dexterity;

  constructor(name, family, age, isAlive, weaponOfChoice, dexterity) {
    super(name, family, age, isAlive, weaponOfChoice, dexterity);
    this.weaponfOfChoice = weaponOfChoice;
    this.dexterity = dexterity;
  }

  communicate() {
    return `${super.communicate()} First I hit then I ask questions`;
  }
}

export default Fighter;
