import {
    btnMain, btnRetry, loader, resultCard, tabRandom, tabWheel, viewRandom, viewWheel
} from './dom.js';

export function showLoader() {
    resultCard.classList.add('hidden');
    loader.classList.remove('hidden');
    
    // Manage buttons
    btnMain.disabled = true;
    btnMain.classList.add('hidden');
    btnRetry.classList.add('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
    resultCard.classList.remove('hidden');
    
    // Manage buttons
    btnMain.classList.add('hidden');
    btnRetry.classList.remove('hidden');
    btnMain.disabled = false;
}

export function switchTabUI(mode) {
    if (mode === 'random') {
        tabRandom.classList.add('active');
        tabWheel.classList.remove('active');
        viewRandom.classList.remove('hidden');
        viewWheel.classList.add('hidden');
    } else {
        tabRandom.classList.remove('active');
        tabWheel.classList.add('active');
        viewRandom.classList.add('hidden');
        viewWheel.classList.remove('hidden');
    }
}
