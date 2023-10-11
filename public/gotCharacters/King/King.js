import Character from "../Characters/Characters.js";

class King extends Character {
  yearsOfRule;

  communicate() {
    return `${super.communicate} You are all going to die`;
  }
}

export default King;
