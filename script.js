import { btnMain, btnCardReroll, btnSpin, btnWheelReset, tabRandom, tabWheel, radioType, btnClosePopup } from './js/dom.js';
import { pickFood } from './js/random.js';
import { setupWheel, spinWheel } from './js/wheel.js';
import { switchTabUI, hideEmptyPopup } from './js/ui.js';
import { updateFilterVisibility } from './js/filter.js';

// --- INITIALIZATION ---
updateFilterVisibility();

// --- EVENT LISTENERS ---
radioType.forEach(radio => {
    radio.addEventListener('change', updateFilterVisibility);
});

btnMain.addEventListener('click', pickFood);
btnCardReroll.addEventListener('click', pickFood); // New listener
btnClosePopup.addEventListener('click', hideEmptyPopup); // Popup Listener

btnSpin.addEventListener('click', spinWheel);
btnWheelReset.addEventListener('click', spinWheel);

tabRandom.addEventListener('click', () => switchTabUI('random'));
tabWheel.addEventListener('click', () => {
    switchTabUI('wheel');
    setupWheel(); // Initialize wheel when switching to this tab
});
