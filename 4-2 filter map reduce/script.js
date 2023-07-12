////////////////////////////////
//////////// FILTER ////////////
const angka = [-1, 10, 3, 0, 2, 8, 4, -5, -9, 6, -3, 7, 12];

// mencari angka >=4
// MENGGUNAKAN FOR
const angkaFilterFor = []; // walaupun const tetap bisa diganti atau menambahkan nilai pada array
// kecuali diganti menjadi string atau interger, dll
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 4) {
    angkaFilterFor.push(angka[i]);
  }
}

console.log(angkaFilterFor);

// MENGGUNAKAN FILTER
const angkaFilter = angka.filter(function (a) {
  return a >= 4;
});
console.log(angkaFilter);
// atau
const angkaFilterArrow = angka.filter((a) => a >= 3);
console.log(angkaFilter);

/////////////////////////////
//////////// MAP ////////////
const angkaMap = angka.map((a) => a * 100);
console.log(angkaMap);

////////////////////////////////
//////////// REDUCE ////////////

// Reduce adalah melakukan sesuatu terhadap seluruh elemen arraynya
// curent value adalah element array yang sedang di loopingnya
// accumulator adalah hasil dari prosesnya, misal dijumlahkan dll
// [0, -1, 10, 3, 0, 2, 8, 4, -5, -9, 6, -3, 7, 12];
// 0 adalah initial value atau nilai awalnya
const angkaReduce = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// 0 adalah nilai awalnya, apabila tidak diisi defaultnya 0
// apabila diisi akan mempengaruhi hasilnya
console.log(angkaReduce);

//////////////////////////////////
//////////// CHAINING ////////////

// Cari angka > 5
// kalikan 3
// jumlahkan

const hasilChaining = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((acc, value) => acc + value);

console.log(hasilChaining);
