function Character(name, hitPoint) {
  // Object.create()
  //   let character = Object.create(methodCharacter);
  // function declaration
  //   let character = {};

  // yang terjadi di belakang layar
  // let this = {};
  this.name = name;
  this.hitPoint = hitPoint;

  // yang terjadi di belakang layar
  //   return this;
}

Character.prototype.heal = function (potion) {
  this.hitPoint += potion;
  return `${this.name} You've been healed`;
};

Character.prototype.attacked = function (damage) {
  this.hitPoint -= damage;
  return `${this.name} You've been attacked`;
};

let vaan = new Character("vaan", 200);
let balthier = new Character("vaan", 200);

// versi class
// di belakang layar yang terjadi seperti prototype
class Character {
  constructor(name, hitPoint) {
    this.name = name;
    this.hitPoint = hitPoint;
  }

  heal(potion) {
    this.hitPoint += potion;
    return `${this.name} You've been healed`;
  }

  attacked(damage) {
    this.hitPoint -= damage;
    return `${this.name} You've been attacked`;
  }
}

let fran = new Character("fran", 120);
let basch = new Character("basch", 450);
