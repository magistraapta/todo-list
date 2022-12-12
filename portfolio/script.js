// Deklarasikan variabel untuk menyimpan teks yang akan diubah
let text = "Selamat ";

// Deklarasikan array dengan teks-teks yang akan digunakan untuk mengubah teks
let texts = ["Hai", "Hallo", "안녕", "Bonjour", "Hola", "こんにちは"];

// Variabel untuk menyimpan indeks array
let index = 0;

// Fungsi untuk mengubah teks
function changeText() {
document.getElementById('hero').innerHTML = text;
  text = texts[index]; // Ganti teks dengan teks pada indeks array saat ini
  index++; // Tambahkan 1 ke indeks array
  if (index >= texts.length) { // Jika indeks sudah melebihi panjang array
    index = 0; // Set indeks ke 0 lagi
  }
}

// Jalankan fungsi changeText setiap 1 detik (1000 milisecond)
setInterval(changeText, 1000);
