// 2. Function Declaration
// Tidak perlu buat duplikat dari objeknya
// Tinggal instansiasinya yang ditambah
const methodCharacter = {
  heal: function (potion) {
    this.hitPoint += potion;
    console.log(`${name} You've been healed`);
  },
  attacked: function (damage) {
    this.hitPoint -= damage;
    console.log(`${name} You've been attacked`);
  },
};

function Character(name, hitPoint) {
  let character = Object.create(methodCharacter);
  character.name = name;
  character.hitPoint = hitPoint;

  return character;
}

let balthier = Character("balthier", 200);
let vaan = Character("vaan", 300);
