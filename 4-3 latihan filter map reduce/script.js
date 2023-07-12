// ambil semua elemen video
const songs = Array.from(document.querySelectorAll("[data-duration]"));
console.log(songs);

// pilih hanya yang Mylo Xyloto
let myloXloto = songs
  .filter((song) => song.textContent.includes("Mylo Xyloto"))
  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi integer, ubah menit menjadi detik
  .map((waktu) => {
    // 3:12 -> [3, 12] split
    const parts = waktu
      .split(":")
      // ubah menjadi float
      .map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
console.log(myloXloto);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(myloXloto / 3600);
myloXloto = myloXloto - jam * 3600;
const menit = Math.floor(myloXloto / 60);
const detik = myloXloto - menit * 60;

console.log(`${jam} ${menit} ${detik}`);

// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam}:${menit}:${detik}`;

const totalSong = songs.filter((song) =>
  song.textContent.includes("Mylo Xyloto")
).length;
console.log(totalSong);
const pTotalSong = document.querySelector(".jumlah-lagu");
pTotalSong.textContent = `${totalSong} lagu`;
