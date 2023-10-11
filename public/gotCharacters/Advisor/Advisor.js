import Character from "../Characters/Characters.js";

class Advisor extends Character {
  advisorTo;

  communicate() {
    return `${
      super.communicate
    } I don't know why but I think I am going to die soon`;
  }
}

export default Advisor;
