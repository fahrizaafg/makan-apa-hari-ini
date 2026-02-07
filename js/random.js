import { funnyQuotes } from './data.js'; // Keep for backward compatibility if needed, but we use getRelevantQuote now
import { getRelevantQuote } from './quotes.js';
import { getFilteredFood } from './filter.js';
import { getRandomItem } from './utils.js';
import { showLoader, hideLoader } from './ui.js';
import { 
    foodNameEl, foodCategoryEl, foodEmojiEl, foodQuoteEl, 
    foodDescEl, foodPriceEl, radioFinance 
} from './dom.js';

export function pickFood() {
    const filtered = getFilteredFood();

    if (filtered.length === 0) {
        alert("Waduh! Gak ada menu/tempat yang cocok sama filter kamu. Coba ubah filternya ya!");
        return;
    }

    showLoader();

    setTimeout(() => {
        const item = getRandomItem(filtered);
        
        // Get current finance mode for quote context
        let currentMode = 'bokek';
        radioFinance.forEach(r => { if(r.checked) currentMode = r.value; });

        const quote = getRelevantQuote(item, currentMode);

        foodNameEl.textContent = item.name;
        foodEmojiEl.textContent = item.emoji;
        foodQuoteEl.textContent = quote;

        // Handle differentiation between Food and Place
        if (item.menu) {
            // It's a PLACE
            foodCategoryEl.textContent = item.type; // e.g. "Warkop"
            foodDescEl.textContent = `Menu andalan: ${item.menu}. ${item.note}`;
            foodPriceEl.textContent = item.price === 1 ? "💰 Hemat (Bokek Friendly)" : "💸 Agak Pricey (Gajian Only)";
        } else {
            // It's FOOD
            foodCategoryEl.textContent = item.category;
            foodDescEl.textContent = item.desc;
            foodPriceEl.textContent = item.priceRange;
        }

        hideLoader();
    }, 1500);
}
