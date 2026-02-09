import { foodList } from './data.js';
import { placesList } from './places.js';
import { 
    radioFinance, radioType, 
    filterSpicy, filterHealthy, 
    filterNoSpicy, filterSoup, filterFried,
    filterRice, filterNoodle, filterMeat, filterSeafood,
    filterAlcohol
} from './dom.js';

export function getFilteredFood() {
    // 1. Check Finance Mode
    let selectedMode = 'bokek';
    radioFinance.forEach(radio => {
        if (radio.checked) selectedMode = radio.value;
    });

    // 2. Check Type Mode (Makanan / Minuman / Masak / Tempat)
    let selectedType = 'makanan';
    radioType.forEach(radio => {
        if (radio.checked) selectedType = radio.value;
    });

    // --- TEMPAT MAKAN LOGIC ---
    if (selectedType === 'tempat') {
        // Jika filter Alcohol DICENTANG saat mode Tempat, return empty (karena alkohol bukan tempat)
        if (filterAlcohol.checked) return [];

        return placesList.filter(place => {
            // Bokek Mode: Price 1 (Warkop/Warung)
            if (selectedMode === 'bokek') {
                return place.price === 1;
            }
            // Gajian/Sultan Mode: Price >= 2 (Cafe/Resto)
            if (selectedMode === 'gajian' || selectedMode === 'sultan') {
                return place.price >= 2;
            }
            return true;
        });
    }

    // 3. Food/Drink Filter Logic
    return foodList.filter(food => {
        // --- TYPE FILTER ---
        if (selectedType === 'makanan') {
            // Jika filter Alcohol DICENTANG saat mode Makanan, return false
            if (filterAlcohol.checked) return false;
            
            if (food.category === 'Minuman') return false;
            if (food.category === 'Alkohol') return false; // Fix: Jangan tampilkan alkohol di makanan
            if (food.tags && food.tags.indexOf('masak') !== -1) return false;
        } 
        else if (selectedType === 'minuman') {
            // Jika filter Alcohol TIDAK dicentang, sembunyikan semua yang bertag 'mabok'
            if (!filterAlcohol.checked) {
                if (food.tags && food.tags.indexOf('mabok') !== -1) return false;
            }
            // Jika filter Alcohol DICENTANG, HANYA tampilkan yang bertag 'mabok'
            else {
                if (!food.tags || food.tags.indexOf('mabok') === -1) return false;
            }

            // Pastikan kategori tetap Minuman atau Alkohol
            if (food.category !== 'Minuman' && food.category !== 'Alkohol') return false;
        }
        else if (selectedType === 'masak') {
            // Jika filter Alcohol DICENTANG saat mode Masak, return false
            if (filterAlcohol.checked) return false;

            if (!food.tags || food.tags.indexOf('masak') === -1) return false;
            if (food.category === 'Alkohol') return false; // Fix: Jangan tampilkan alkohol di masak
        }

        // --- PRICE FILTER ---
        if (selectedMode === 'bokek') {
            if (food.price !== 1) return false;
        } else if (selectedMode === 'gajian') {
            if (food.price !== 2) return false;
        } else if (selectedMode === 'sultan') {
            if (food.price !== 3) return false;
        }

        // --- TAG FILTERS ---
        // Helper for Keyword Matching
        const searchStr = (food.name + " " + food.desc + " " + food.category + " " + (food.tags ? food.tags.join(" ") : "")).toLowerCase();

        // 1. Healthy
        if (filterHealthy.checked && (!food.tags || food.tags.indexOf('sehat') === -1)) return false;
        
        // 2. Spicy
        if (filterSpicy.checked && (!food.tags || food.tags.indexOf('pedas') === -1)) return false;
        
        // 3. No Spicy
        if (filterNoSpicy.checked && food.tags && food.tags.indexOf('pedas') !== -1) return false;

        // 4. Soup / Berkuah
        if (filterSoup.checked) {
            const soupCategories = ['Soto', 'Sop', 'Bakso', 'Sayur'];
            const soupKeywords = ['kuah', 'siram', 'godog', 'rebus', 'steamboat', 'suki'];
            
            const isSoupCategory = soupCategories.indexOf(food.category) !== -1;
            const hasSoupKeyword = soupKeywords.some(k => searchStr.indexOf(k) !== -1);
            const isDryKeyword = ['goreng', 'bakar', 'penyet', 'kering', 'yamin'].some(k => searchStr.indexOf(k) !== -1);

            if (food.category === 'Minuman') {
                 const drinkSoupKeywords = ['wedang', 'sop buah', 'sekoteng'];
                 if (!drinkSoupKeywords.some(k => searchStr.indexOf(k) !== -1)) return false;
            } else {
                if (isSoupCategory) {
                    if (searchStr.indexOf('bakar') !== -1 || searchStr.indexOf('goreng') !== -1) {
                         if (searchStr.indexOf('kuah') === -1) return false;
                    }
                } else {
                    if (!hasSoupKeyword) return false;
                    if (isDryKeyword && searchStr.indexOf('kuah') === -1) return false;
                }
            }
        }

        // 5. Fried / Gorengan
        if (filterFried.checked) {
            const friedKeywords = ['goreng', 'bakar', 'penyet', 'krispi', 'fry', 'katsu', 'geprek', 'sate', 'steak']; 
            const hasFriedKeyword = friedKeywords.some(k => searchStr.indexOf(k) !== -1);
            if (!hasFriedKeyword) return false;
        }

        // 6. Rice / Nasi
        if (filterRice.checked) {
            const isRiceCategory = food.category === 'Nasi';
            const hasRiceKeyword = searchStr.indexOf('nasi') !== -1 || searchStr.indexOf('rice') !== -1 || searchStr.indexOf('bubur') !== -1 || searchStr.indexOf('lontong') !== -1 || searchStr.indexOf('ketupat') !== -1;
            // Check if it's a "Lauk" that is typically eaten with rice? No, strict "Nasi" usually means "Rice Dish".
            // If user selects "Nasi", they probably want Nasi Goreng, Nasi Uduk, etc.
            if (!isRiceCategory && !hasRiceKeyword) return false;
        }

        // 7. Noodle / Mie
        if (filterNoodle.checked) {
            const isNoodleCategory = food.category === 'Mie' || food.category === 'Pasta';
            const hasNoodleKeyword = searchStr.indexOf('mie') !== -1 || searchStr.indexOf('noodle') !== -1 || searchStr.indexOf('spaghetti') !== -1 || searchStr.indexOf('pasta') !== -1 || searchStr.indexOf('kwetiau') !== -1 || searchStr.indexOf('bihun') !== -1 || searchStr.indexOf('soun') !== -1 || searchStr.indexOf('ramen') !== -1 || searchStr.indexOf('udon') !== -1;
            if (!isNoodleCategory && !hasNoodleKeyword) return false;
        }

        // 8. Meat / Daging
        if (filterMeat.checked) {
            const meatCategories = ['Daging', 'Ayam', 'Bebek', 'Sate', 'Western', 'Korea', 'Jepang', 'Fast Food'];
            const meatKeywords = ['sapi', 'ayam', 'bebek', 'kambing', 'babi', 'steak', 'burger', 'meat', 'chicken', 'beef', 'pork', 'lamb', 'sosis', 'kornet', 'bakso', 'rendang', 'gulai', 'sate'];
            
            // Exclude if Seafood/Ikan (unless Mixed)
            const isSeafood = food.category === 'Ikan' || food.category === 'Seafood' || searchStr.indexOf('ikan') !== -1 || searchStr.indexOf('udang') !== -1 || searchStr.indexOf('cumi') !== -1;
            
            const isMeatCategory = meatCategories.indexOf(food.category) !== -1;
            const hasMeatKeyword = meatKeywords.some(k => searchStr.indexOf(k) !== -1);
            
            if (!isMeatCategory && !hasMeatKeyword) return false;
            
            // If strictly seafood category, might not want to show under "Daging" unless it has meat components? 
            // Actually "Daging" usually implies Red/White meat, not Fish.
            // If user checks "Daging" and result is "Ikan Bakar", they might be confused.
            if (food.category === 'Ikan' || food.category === 'Seafood') return false;
        }

        // 9. Seafood
        if (filterSeafood.checked) {
            const seafoodCategories = ['Seafood', 'Ikan'];
            // Removed 'teri' to avoid matching 'teriyaki'. Added 'ikan teri' specific check if needed, 
            // but 'ikan' usually covers it or tags.
            const seafoodKeywords = ['ikan', 'udang', 'cumi', 'kepiting', 'kerang', 'lele', 'gurame', 'nila', 'kakap', 'dori', 'tuna', 'salmon', 'sardine'];
            
            const isSeafoodCategory = seafoodCategories.indexOf(food.category) !== -1;
            let hasSeafoodKeyword = seafoodKeywords.some(k => searchStr.indexOf(k) !== -1);
            
            // Special check for 'teri' (anchovy) but avoid 'teriyaki'
            if (searchStr.indexOf('teri') !== -1 && searchStr.indexOf('teriyaki') === -1) {
                hasSeafoodKeyword = true;
            }
            
            if (!isSeafoodCategory && !hasSeafoodKeyword) return false;
        }

        return true;
    });
}

export function updateFilterVisibility() {
    let selectedType = 'makanan';
    radioType.forEach(radio => {
        if (radio.checked) selectedType = radio.value;
    });

    const alcoholParent = filterAlcohol.closest('.checkbox-label');

    if (selectedType === 'minuman') {
        filterAlcohol.disabled = false;
        if (alcoholParent) alcoholParent.classList.remove('disabled-filter');
    } else {
        filterAlcohol.checked = false;
        filterAlcohol.disabled = true;
        if (alcoholParent) alcoholParent.classList.add('disabled-filter');
    }
}
