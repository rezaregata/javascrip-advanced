// FUNCTION DECLARATION
// function tampilPesan(nama) {
//   alert("halo" + nama);
// }
// tampilPesan("John");

// FUNCTION EXPRESSION
// let sayHello = function (nama) {
//   alert("hello" + nama);
// };
// sayHello("John");

// ARROW FUNCTION
// Bentuk lain yang lebih ringkas dari function expression - MDN
// let showMessage = (nama) => {
//   alert("halo" + nama);
// };
// showMessage("John");

// implisit return
// const showName = (nama) => `Halo, saya ${nama}`;
// console.log(showName("John"))

// implisit return tanpa parameter
// const showName = () => `Halo, world`;
// console.log(showName());

let siswa = ["John", "elkan", "Agnelli"];

// let jumlahHuruf = siswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = siswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = siswa.map((nama) => ({
  //   nama: nama,
  // jika key dan propertiesnya sama bisa gunakan nama saja
  nama,
  jumlahHuruf: nama.length,
})); // kurung kurawal dianggap sebagai objek
console.log(jumlahHuruf);
console.table(jumlahHuruf);
