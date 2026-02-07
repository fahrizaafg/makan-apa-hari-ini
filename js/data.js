import { foods } from './foods.js';
import { drinks } from './drinks.js';
import { alcohol } from './alcohol.js';

// --- DATABASE MAKANAN & MINUMAN ---
// Gabungan dari file foods.js, drinks.js, dan alcohol.js agar kompatibel dengan logika yang sudah ada
export const foodList = [
    ...foods,
    ...drinks,
    ...alcohol
];

// --- FUNNY QUOTES ---
// Keep for backward compatibility, but logic is now in quotes.js
export const funnyQuotes = [
    "Gas langsung beli, keburu laper maag!",
    "Diet? Wacana doang itu mah, besok aja.",
    "Ini sih aman di kantong, sikat!",
    "Lagi bokek tapi pengen enak? Ini jawabannya.",
    "Jangan lupa minum air putih biar nggak seret.",
    "Awas ketagihan, resiko ditanggung sendiri.",
    "Cocok buat cuaca hari ini yang nggak jelas.",
    "Makan ini auto kenyang bego, siap-siap ngantuk.",
    "Self reward ceritanya, padahal tiap hari jajan.",
    "Kapan lagi kan? Mumpung masih muda.",
    "Pilihan terbaik hari ini (kata algoritma gue).",
    "Yakin nggak mau nambah porsi?",
    "Sikat miring! Jangan kasih kendor.",
    "Pesen sekarang keburu tutup woy.",
    "Mantap jiwa! Rasanya ah mantap.",
    "Enak, murah, kenyang. Paket komplit.",
    "Hati-hati kolesterol naik dikit, gapapa lah.",
    "Definisi bahagia sederhana: perut kenyang.",
    "Nggak usah mikir kalori, nikmatin aja.",
    "Fix ini enak banget, no debat.",
    "Kalau ini sih nggak pernah salah.",
    "Pas banget buat tanggal tua.",
    "Rasa bintang lima, harga kaki lima.",
    "Jujur, gue juga pengen ini.",
    "Udah, gasss jangan banyak mikir!"
];
