// TAGGED TEMPLATE LITERALS
// adalah bentuk yang lebih kompleks dari template literals, memungkinkan kita untuk membaca template literals melalui sebuah function

// const nama = "vaan";
// const umur = 17;

// function coba(strings, ...values) {
//   // values mengambil nama dan umur
//   // rest parameter -> menampung seluruh expression yg ada di dalam template literalsnya dg menulis ...(nama variable)
//   //   let result = "";
//   //   strings.forEach((str, index) => {
//   //     result += `${str} ${values[index] || ""}`;
//   //   });
//   //   return result;

//   //atau
//   return strings.reduce(
//     (result, str, index) => `${result} ${str} ${values[index] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, my name is ${nama}, Im ${umur} years old`;

// console.log(str);

// HIGHLIGHT

const nama = "vaan";
const umur = 17;

function highlight(strings, ...values) {
  // values mengambil nama dan umur
  // rest parameter -> menampung seluruh expression yg ada di dalam template literalsnya dg menulis ...(nama variable)
  //   let result = "";
  //   strings.forEach((str, index) => {
  //     result += `${str} ${values[index] || ""}`;
  //   });
  //   return result;

  //atau
  return strings.reduce(
    (result, str, index) =>
      `${result} ${str} <span class="highlight">${values[index] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, my name is ${nama}, Im ${umur} years old`;

document.body.innerHTML = str;
console.log(str);
