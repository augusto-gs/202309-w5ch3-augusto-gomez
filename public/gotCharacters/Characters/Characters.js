class Character {
  name;
  family;
  age;
  isAlive;

  die() {
    this.isAlive = false;
  }

  communicate() {
    "I will say to you this";
  }
}

export default Character;
