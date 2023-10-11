class Character {
  name;
  family;
  age;
  isAlive;
  series;

  constructor(name, family, age, isAlive, series = "Game of Thrones") {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = isAlive;
    this.series = series;
  }

  die() {
    this.isAlive = false;
  }

  communicate() {
    return "I will say to you this";
  }
}

export default Character;
