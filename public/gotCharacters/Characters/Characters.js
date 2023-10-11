class Character {
  name;
  family;
  age;
  isAlive;

  constructor(name, family, age, isAlive) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }

  communicate() {
    return "I will say to you this";
  }
}

export default Character;
