// HTML FRAGMENTS
// const mhs = {
//   nama: "Reza Regata",
//   umur: 30,
//   nipp: "69632",
//   email: "rezaregata@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nipp">${mhs.nipp}</span>
// </div>
// `;

// LOOPING
// const chars = [
//   {
//     nama: "vaan",
//     age: 17,
//   },
//   {
//     nama: "basch",
//     age: 33,
//   },
//   {
//     nama: "balthier",
//     age: 43,
//   },
// ];

// const el = `<div class="chars">
// ${chars
//   .map(
//     (char) => `
// <ul>
//         <li>${char.nama}</li>
//         <li>${char.age}</li>
// </ul>
// `
//   )
//   .join("")}

// </div>
// `;

// CONDITIONAL
// ternary
// const lagu = {
//   judul: "My Universe",
//   penyayi: "Coldplay",
//   feat: "BTS",
// };

// const el = `<div class="lagu">
// <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyayi} ${lagu.feat ? `(feat. ${lagu.feat}) ` : ""}</li>
// </ul>
// </div>
// `;

// NESTED
// html Fragment bersarang
const char = {
  nama: "Vaan",
  level: 10,
  skills: ["fire", "ice", "sword", "crossbow"],
};

function cetakSkill(skills) {
  return `<ol>
         ${skills.map((skill) => `<li>$ {skill}</li>`).join("")}
        </ol>`;
}

const el = `<div class="char">
<h2>${char.nama}</h2>
<span class="level">${char.level}</span>
<h4>Skills :</h4>
${cetakSkill(char.skills)}
</div>
`;

document.body.innerHTML = el;
