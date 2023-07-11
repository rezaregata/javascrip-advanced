// 2 FASE pada Execution Context
// 1. Creation Phase
// creation phase pada global context
// js akan mengecek apakan ada variable atau function di dalam kodingan, consolo log akan dihiraukan
// kalau ada, akan membuat nama variable, akan diisi dengan undefined
// nama var = undefined
// nama function = fn()
// konsep ini disebut hoisting (menaikkan bendera)
// window = global object
// this = window
// console.log(nama);
// var nama = "vaan";

// 2. Execution Phase

// isi function yang di log
console.log(sayHello);
// function dijalankan
console.log(sayHello());

var nama = "vaan";
var age = 32;

function sayHello() {
  console.log(`Nama ${nama}, umur ${age}`);
  // atau, agar tidak undefined
  return `Nama ${nama}, umur ${age}`;
}

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = "Balthier";
var username = "@balthier";

function cetakURL() {
  console.log(arguments);
  var twitterURL = "http://twitter.com/";
  return twitterURL + username;
}

console.log(cetakURL("vaan"));
// vaan akan muncul di arguments
// balthier akan muncul di cetakURL karena global scope

// urutan pengambilan variable
// variable lokal
// variable argumen
// variable global
