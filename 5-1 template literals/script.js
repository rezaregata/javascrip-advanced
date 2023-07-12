// template literal adalah string literal yang memungkinkan adanya expression di dalamnya

// STRING LITERAL
let nama = "Reza Regata"; // kutip dua
let nipp = "69632"; // kutip satu
let email = `rezaregata@gmail.com`; // backtick

// menggunakan backtick memungkinkan membuat template literal
// bisa multiline string
// embedded expression
// html fragments
// expression interpolation
// tagged template

const contoh1 = `string text`;
const contoh2 = `string text baris 1
string text baris 2
`; // multiline string
const contoh3 = `string ${nama} ${nipp}`; // embedded expression
// const contoh4 = tag`string text ${nama} ${nipp}`;
//html fragments, tag template

console.log("string 1\nstring 2"); // menggunakan kutip 2
console.log(`string1
string 2`); // menggunakan template literal
