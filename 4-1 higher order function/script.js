// HIGHER ORDER FUNCTION
// function yang beroperasi pada function yang lain, baik itu digunakan dalam argument maupun sebagai return value

// Javascript memerlakukan function sebagai object

// doTask sebagai Higher order function
// done sebagai callback
function doTask(task, done) {
  console.log(`Start doing task ${task} ...`);
  done();
}

function done() {
  alert("Task done");
}

doTask("web programming", done);

// atau contoh lain
// setTimeout adalah higher order function
// arrow function sebagai callback
setTimeout(() => {
  this.classList.toggle(dua);
}, 600);

// atau contoh lain
// say hello sebagai higher order function
// karena memiliki return value yang juga function
function sayHello(time) {
  return function (name) {
    console.log(`helo ${name}, good ${time}, have a good day`);
  };
}

let goodNight = sayHello("night");
console.dir(goodNight("john"));

// KENAPA ??
// ABSTRAKSI
// untuk membuat kode bisa menjadi lebih sederhana/simple

// semakin besar sebuah program,
// semakin tinggi kompleksitasnya,
// semakin membingungkan programmer nya

// CONTOH HIGHER ORDER FUNCTION
Array.prototype.map();
Array.prototype.filter();
Array.prototype.reduce();
