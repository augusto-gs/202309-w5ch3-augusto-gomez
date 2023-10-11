import Character from "../Characters/Characters.js";

class Fighter extends Character {
  weaponfOfChoice;
  dexterity;

  communicate() {
    return `${super.communicate} First I hit then I ask questions`;
  }
}

export default Fighter;
