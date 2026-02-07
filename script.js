import { btnMain, btnCardReroll, btnSpin, btnWheelReset, tabRandom, tabWheel } from './js/dom.js';
import { pickFood } from './js/random.js';
import { setupWheel, spinWheel } from './js/wheel.js';
import { switchTabUI } from './js/ui.js';

// --- EVENT LISTENERS ---
btnMain.addEventListener('click', pickFood);
btnCardReroll.addEventListener('click', pickFood); // New listener

btnSpin.addEventListener('click', spinWheel);
btnWheelReset.addEventListener('click', spinWheel);

tabRandom.addEventListener('click', () => switchTabUI('random'));
tabWheel.addEventListener('click', () => {
    switchTabUI('wheel');
    setupWheel(); // Initialize wheel when switching to this tab
});
