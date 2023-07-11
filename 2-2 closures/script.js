// Closure
// Closure merupakan kombinasi antara function dan lingkungan leksikal (leksikal scope) di dalam function tersebut -- MDN

// Closure adalah sebuah function ketika memiliki akses ke parent scope nya, meskipun parent scope nya sudah selesai dieksekusi - w3school

// CLosure adalah sebuah function yang dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan - code fellow

// CLosure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain - Techsith

// Lexical Scope
function init() {
  let nama = "vaan"; // local variable
  function tampilNama() {
    // inner function (closure*)
    console.log(nama); // akses ke parent variable
    // lexical scope, mengambil dari global variable
  }
  tampilNama();
}
init();

// closure membutuhkan variable nama di parent nya

// ALASAN MENGGUNAKAN CLOSURES
// 1. Untuk membuat function factories
function sayHello(time) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${time}`);
  };
}

let selamatPagi = sayHello("Pagi");
let selamatSiang = sayHello("Siang");
let selamatMalam = sayHello("Malam");

selamatPagi("Vaan");
selamatSiang("basch");
selamatMalam("balthier");

// 2. Untuk membuat private method
let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();

console.log(a());
console.log(a());
console.log(a());

// atau dibungkus dengan immediately invoke function
// agar tidak jalan setengahnya
let subtract = (function () {
  let counter = 10;
  return function () {
    return --counter;
  };
})();

counter = 100;
// tidak akan mengganggu counter = 10

console.log(subtract());
console.log(subtract());
console.log(subtract());
