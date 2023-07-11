// KONSEP THIS PADA ARROW FUNCTION

// CONSTRUCTOR FUNCTION
// const Siswa = function () {
//   this.nama = "John";
//   this.umur = 23;
//   this.sayHello = function () {
//     console.log(`hello saya ${this.nama} umur ${this.umur}`);
//   };
// };

// const vaan = new Siswa();

// ARROW FUNCTION DI DALAM CONSTRUCTOR FUNCTION
const Siswa = function () {
  this.nama = "John";
  this.umur = 23;
  this.sayHello = () => {
    console.log(`hello saya ${this.nama} umur ${this.umur}`);
  };
};
const vaan = new Siswa();

// ARROW FUNCTION DI DALAM OBJECT LITERAL
const john = {
  nama: "John",
  umur: 10,
  sayHello: function () {
    console.log(`Halo, saya ${this.nama} dan umur saya ${this.umur} tahun`);
  },
}; // hasil nya akan sama

// tetapi jika diubah menjadi arrow function hasilnya akan undefined
// karena arrow function tidak memiliki konsep this
// Contoh:
const siswa2 = {
  nama: "Elkaan",
  umur: 11,
  sayHello: () => {
    console.log(`Halo, saya ${this.nama} dan umur saya ${this.umur} tahun`);
  },
};

const box = document.querySelector(".box");
// tidak bisa diubah menjadi arrow function karena tidak memiliki konsep this, sementara dibutuhkan untuk mengambil konteks box
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  // ketika menggunakan functioin, this berisi apapun yang diluarnya, maka posisi nya di global, jadi this berisi window
  // seharusnya this berisi box
  //   setTimeout(function () {
  //     this.classList.toggle("caption");
  //   }, 600);

  // this di arrow function akan mengambil di luar
  // this akan mengacu ke box
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
  //   console.log(this);
});
