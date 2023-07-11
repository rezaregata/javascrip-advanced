// Membuat object pada Javascript
// 1. Object Literal
// Membuat object nya langsung
// Kelemahan apabila objeknya banyak maka akan memakan banyak resource
// Tidak efektif untuk objek yang banyak

// let character1 = {
//   name: "Balthier",
//   hitPoint: 100,
//   eat: function (portion) {
//     this.hitPoint = this.hitPoint + portion;
//     console.log(`Selamat makan ${this.nama}`);
//   },
// };

// let character2 = {
//   name: "Vaan",
//   hitPoint: 100,
//   eat: function (portion) {
//     this.hitPoint = this.hitPoint + portion;
//     console.log(`Selamat makan ${this.nama}`);
//   },
// };

// 2. Function Declaration
// Tidak perlu buat duplikat dari objeknya
// Tinggal instansiasinya yang ditambah
// PROBLEM
// function Character(name, hitPoint) {
//   let character = {};
//   character.name = name;
//   character.hitPoint = hitPoint;

//   character.heal = function (potion) {
//     // this.hitPoint = this.hitPoint + portion
//     this.hitPoint += potion;
//     console.log(`${name} You've been healed`);
//   };

//   character.attacked = function (damage) {
//     this.hitPoint -= damage;
//     console.log(`${name} You've been attacked`);
//   };

//   return character;
// }

// let balthier = Character("balthier", 200);
// let vaan = Character("vaan", 300);

// 3. Constructor Function (keyword new)
// keyword new
// mirip function declaration
// PROBLEM
//
function Character(name, hitPoint) {
  this.name = name;
  this.hitPoint = hitPoint;

  this.heal = function (potion) {
    // this.hitPoint = this.hitPoint + portion
    this.hitPoint += potion;
    console.log(`${name} You've been healed`);
  };

  this.attacked = function (damage) {
    this.hitPoint -= damage;
    console.log(`${name} You've been attacked`);
  };
}

// wajib menggunakan new
// apabila tidak menggunakan new akan disangka functioni declaration
// instansiasi function declaration akan mencari deklarasi variable => undefined
let balthier = new Character("balthier", 200);
let vaan = new Character("vaan", 300);

// 4. Object.create()
