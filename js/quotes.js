const quotesData = [
    // --- TELUR ---
    { tags: ['telur'], text: "Murah tapi setia, gak pernah ngecewain." },
    { tags: ['telur'], text: "Protein rakyat jelata, rasa ningrat." },
    { tags: ['telur'], text: "Definisi bahagia sederhana: Nasi anget + Telur." },
    { tags: ['telur'], text: "Telur dadar kecap adalah koentji." },
    { tags: ['telur'], text: "Penyelamat tanggal tua yang hakiki." },

    // --- INDOMIE / MIE ---
    { tags: ['mie', 'indomie'], text: "Penyelamat hidup anak kos sejak dulu kala." },
    { tags: ['mie', 'indomie'], text: "Baunya aja udah bikin kenyang (bohong deng, laper)." },
    { tags: ['mie', 'indomie'], text: "Dibuatin orang lain rasanya 10x lebih enak." },
    { tags: ['mie'], text: "Sruput terus sampe lupa utang." },
    { tags: ['mie', 'indomie'], text: "Micin adalah koentji." },
    { tags: ['mie', 'indomie'], text: "Seleraku, seleramu, selera kita semua." },
    { tags: ['mie', 'indomie'], text: "Agama Indomie menyatukan kita." },
    { tags: ['mie', 'indomie'], text: "Belum nasi belum makan? Indomie pengecualian." },

    // --- AYAM ---
    { tags: ['ayam'], text: "Upin Ipin aja suka, masa kamu enggak?" },
    { tags: ['ayam'], text: "Paha atau dada? Yang penting rasanya juara." },
    { tags: ['ayam', 'pedas'], text: "Pedasnya bikin nangis, tapi besok beli lagi." },
    { tags: ['ayam'], text: "Ayam goreng is never wrong." },

    // --- NON-HALAL ---
    { tags: ['non-halal'], text: "Surga duniawi yang hakiki." },
    { tags: ['non-halal'], text: "Nikmat mana lagi yang kau dustakan (versi non-halal)." },
    { tags: ['non-halal'], text: "Lemaknya bikin kangen, dietnya besok aja." },
    { tags: ['non-halal'], text: "Haram tapi enak, gimana dong?" },
    { tags: ['non-halal'], text: "Kenikmatan yang tak bisa ditolak." },

    // --- FANCY / MAHAL ---
    { tags: ['fancy', 'mahal', 'steak', 'sushi'], text: "Ini sih bukan buat mikir, langsung bayar." },
    { tags: ['fancy', 'mahal'], text: "Sekali-kali manjain diri, besok makan promag." },
    { tags: ['fancy', 'mahal'], text: "Story Instagram estetik, dompet teriak panik." },
    { tags: ['fancy'], text: "Rasanya kayak dipeluk orang kaya." },
    { tags: ['fancy', 'mahal'], text: "Sekali gigit, berasa jadi Sultan Andara." },
    { tags: ['fancy', 'mahal'], text: "Makan cantik, jangan lupa foto dulu." },
    { tags: ['fancy', 'mahal'], text: "Harganya bikin ginjal bergetar." },
    { tags: ['fancy', 'mahal'], text: "Definisi uang bisa beli kebahagiaan." },

    // --- SEHAT / SAYUR ---
    { tags: ['sehat', 'sayur'], text: "Biar ibu bangga kamu makan sayur." },
    { tags: ['sehat'], text: "Detox dosa-dosa gorengan kemarin." },
    { tags: ['sehat'], text: "Sehat itu mahal, tapi sakit lebih mahal." },
    { tags: ['sehat'], text: "Ijo-ijo bikin mata seger, perut adem." },

    // --- PEDAS ---
    { tags: ['pedas'], text: "Siapin susu beruang sebelum eksekusi." },
    { tags: ['pedas'], text: "Mulut panas, hati puas." },
    { tags: ['pedas'], text: "Sensasi terbakar yang bikin nagih." },
    { tags: ['pedas'], text: "Level pedas: Netizen Indo." },

    // --- MINUMAN ---
    { tags: ['minuman'], text: "Hausnya ilang, dompetnya ikut." },
    { tags: ['minuman', 'kopi'], text: "Melek sampe subuh, tugas kelar (amiin)." },
    { tags: ['minuman', 'manis'], text: "Manis kayak janji manis dia." },
    { tags: ['minuman'], text: "Tenggorokan lega, pikiran tenang." },
    { tags: ['minuman'], text: "Manisnya pas, kayak kamu." },
    { tags: ['minuman'], text: "Seger bener, dahaga hilang seketika." },

    // --- ALKOHOL / MABOK ---
    { tags: ['mabok'], text: "Ingat, besok kerja (kalau ingat)." },
    { tags: ['mabok'], text: "Satu gelas buat happy, dua gelas buat lupa diri." },
    { tags: ['mabok'], text: "Minum air putihnya dibanyakin ya bos." },
    { tags: ['mabok'], text: "Pusingnya besok, senengnya sekarang." },
    { tags: ['mabok'], text: "Jangan nelpon mantan, bahaya." },
    { tags: ['mabok'], text: "Mabok elit, bayar sulit (canda)." },
    { tags: ['mabok'], text: "Pulang naik grab aja, jangan nyetir!" },
    { tags: ['mabok'], text: "Hati-hati, tembok bisa goyang sendiri." },
    { tags: ['mabok'], text: "Obat stress paling ampuh (sementara)." },
    { tags: ['mabok'], text: "Nikmati malam ini, lupakan tagihan." },
    { tags: ['mabok'], text: "Mabok dikit nggak ngaruh." },
    { tags: ['mabok'], text: "Siap-siap hangover besok pagi." },

    // --- MASAK SENDIRI / KOSAN ---
    { tags: ['masak'], text: "Masak sendiri = Irit pangkal kaya." },
    { tags: ['masak'], text: "Skill chef bintang lima (versi sendiri)." },
    { tags: ['masak'], text: "Chef Juna menangis melihat ini." },
    { tags: ['masak'], text: "Skill survival anak kos level max." },
    { tags: ['masak'], text: "Yang penting mateng, rasa urusan belakangan." },
    { tags: ['masak'], text: "Irit pangkal kaya, masak pangkal kenyang." },
    { tags: ['masak'], text: "Dapur berantakan, hati senang." },

    // --- UMUM / RANDOM ---
    { tags: ['umum'], text: "Makan dulu, dietnya mulai besok aja." },
    { tags: ['umum'], text: "Perut kenyang, masalah hilang (sebentar)." },
    { tags: ['umum'], text: "Harta, Tahta, Kulineran." },
    { tags: ['umum'], text: "Gak usah liat kalori, liat aja rasanya." },
    { tags: ['umum'], text: "Rejeki anak sholeh, makan enak hari ini." },
    { tags: ['umum'], text: "Selamat makan, semoga gak keselek." },
    { tags: ['bokek'], text: "Menu akhir bulan, rasa awal bulan." },
    { tags: ['bokek'], text: "Penyelamat di kala dompet menipis." },
    { tags: ['bokek'], text: "Murah, kenyang, alhamdulillah." },
    { tags: ['bokek'], text: "Menu andalan sobat missqueen." },
    { tags: ['gajian'], text: "Self reward terbaik adalah makanan." },
    { tags: ['sultan'], text: "Uang bisa dicari, kepuasan perut nomor satu." },
    { tags: ['umum'], text: "Gas terus, rem blong!" },
    { tags: ['umum'], text: "Nikmat mana lagi yang kau dustakan." }
];

export function getRelevantQuote(item, mode) {
    // 1. Collect all tags from the item
    let itemTags = [];
    
    // Add explicit tags from item
    if (item.tags) itemTags = [...item.tags];
    
    // Infer tags from name/category
    const nameLower = item.name.toLowerCase();
    const catLower = item.category ? item.category.toLowerCase() : ''; // Handle places that have 'type' instead of 'category'
    const typeLower = item.type ? item.type.toLowerCase() : '';

    if (nameLower.includes('telur') || catLower.includes('telur')) itemTags.push('telur');
    if (nameLower.includes('mie') || catLower.includes('mie') || nameLower.includes('indomie')) itemTags.push('mie');
    if (nameLower.includes('ayam') || catLower.includes('ayam')) itemTags.push('ayam');
    if (nameLower.includes('sushi') || nameLower.includes('steak') || item.price === 3) itemTags.push('fancy');
    if (item.category === 'Minuman' || typeLower.includes('cafe')) itemTags.push('minuman');
    if (item.price === 1) itemTags.push('bokek');
    if (item.price >= 2) itemTags.push('gajian');
    if (item.tags && item.tags.includes('masak')) itemTags.push('masak');
    if (item.tags && item.tags.includes('non-halal')) itemTags.push('non-halal');
    
    // ABV Tags Logic
    if (item.abv) {
        if (item.abv < 5) itemTags.push('low_abv');
        else if (item.abv >= 5 && item.abv < 20) itemTags.push('medium_abv');
        else if (item.abv >= 20) itemTags.push('high_abv');
    }

    // Filter quotes that match at least one tag
    let matchingQuotes = quotesData.filter(quote => {
        return quote.tags.some(tag => itemTags.indexOf(tag) !== -1);
    });

    // If no specific match, use 'umum'
    if (matchingQuotes.length === 0) {
        matchingQuotes = quotesData.filter(q => q.tags.indexOf('umum') !== -1);
    }

    // Return random matching quote
    const randomIndex = Math.floor(Math.random() * matchingQuotes.length);
    return matchingQuotes[randomIndex].text;
}
