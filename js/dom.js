// --- DOM ELEMENTS ---
export const btnMain = document.getElementById('btn-main');
export const loader = document.getElementById('loader');
export const resultCard = document.getElementById('result-card');
export const foodEmojiEl = document.getElementById('food-emoji');
export const foodNameEl = document.getElementById('food-name');
export const foodDescEl = document.getElementById('food-desc'); // New element
export const foodPriceEl = document.getElementById('food-price'); // New element
export const foodCategoryEl = document.getElementById('food-category');
export const foodQuoteEl = document.getElementById('food-quote');

export const btnCardReroll = document.getElementById('btn-card-reroll'); // New button

// Filter Elements
/** @type {NodeListOf<HTMLInputElement>} */
export const radioFinance = document.querySelectorAll('input[name="finance"]');
/** @type {NodeListOf<HTMLInputElement>} */
export const radioType = document.querySelectorAll('input[name="type"]');
/** @type {HTMLInputElement} */
export const filterSpicy = /** @type {HTMLInputElement} */ (document.getElementById('filter-spicy'));
/** @type {HTMLInputElement} */
export const filterNoSpicy = /** @type {HTMLInputElement} */ (document.getElementById('filter-no-spicy'));
/** @type {HTMLInputElement} */
export const filterSoup = /** @type {HTMLInputElement} */ (document.getElementById('filter-soup'));
/** @type {HTMLInputElement} */
export const filterFried = /** @type {HTMLInputElement} */ (document.getElementById('filter-fried'));
/** @type {HTMLInputElement} */
export const filterAlcohol = /** @type {HTMLInputElement} */ (document.getElementById('filter-alcohol'));
/** @type {HTMLInputElement} */
export const filterHealthy = /** @type {HTMLInputElement} */ (document.getElementById('filter-healthy'));
/** @type {HTMLInputElement} */
export const filterRice = /** @type {HTMLInputElement} */ (document.getElementById('filter-rice'));
/** @type {HTMLInputElement} */
export const filterNoodle = /** @type {HTMLInputElement} */ (document.getElementById('filter-noodle'));
/** @type {HTMLInputElement} */
export const filterMeat = /** @type {HTMLInputElement} */ (document.getElementById('filter-meat'));
/** @type {HTMLInputElement} */
export const filterSeafood = /** @type {HTMLInputElement} */ (document.getElementById('filter-seafood'));

// Wheel Elements
export const tabRandom = document.getElementById('tab-random');
export const tabWheel = document.getElementById('tab-wheel');
export const viewRandom = document.getElementById('view-random');
export const viewWheel = document.getElementById('view-wheel');
export const wheel = document.getElementById('wheel');

export const btnSpin = document.getElementById('btn-spin');
export const wheelResultDisplay = document.getElementById('wheel-result-display');
export const wheelFoodName = document.getElementById('wheel-food-name');

export const btnWheelReset = document.getElementById('btn-wheel-reset');

// Popup Elements
export const popupEmpty = document.getElementById('popup-empty');
export const btnClosePopup = document.getElementById('btn-close-popup');
