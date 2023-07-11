// var x = 10
// var nama = "vaan"

// jangan menggunakan var, tapi gunakan let

// VAR, LET & CONST

// var i = 10;
// console.log(i);
// output = 10

// console.log(i);
// var j = 10;
// output = undefined

// console.log(k);
// let k = 10;
// output error

// for (var x = 0; x < 5; x++) {
//   console.log(x);
// }
// console.log(x);
// output :
// 1
// 2
// 3
// 4
// 5 == dari console terakhir
// karena javascript menganut function scope bukan block scope

// agar variable x tidak dapat diakses diluar for maka
// function test() {
//   for (var x = 0; x < 5; x++) {
//     console.log(x);
//   }
// }
// test();
// console.log(x);
// output 0 - 4, kemudian console terakhir error

// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) ATAU
// SIAF (SELF INVOKING ANONYMOUS FUNCTION)
// UNTUK MENJAGA AGAR VARIABLE FUNCTION TIDAK DAPAT DIAKSES DARI LUAR
(function () {
  for (var x = 0; x < 7; x++) {
    console.log(x);
  }
})();
console.log(x); // akan error

// untuk mengatasi tersebut cukup menggunakan variable let
// let akan menganut block scope
for (let x = 0; x < 7; x++) {
  console.log(x);
}
console.log(x); //

// CONST
// const adalah variable yang datanya tidak akan(bisa) dirubah lagi
// const digunakan untuk meminimalisir perubahan state
// const tetap bisa dirubah asal bukan mengganti objek/array baru
const objek = {
  nama: "John",
  umur: 21,
};
objek.nama = "Elkan"; // bisa berubah

objek = {
  alamat: "Paledang",
}; // akan error

console.log(objek);

const array = [1, 2, 3, 4];

array.push(5); // nilainya masuk
// jadi [1, 2, 3, 4, 5]

array = [1, 2, 3]; //error
console.log(array);
