import {
    btnMain, loader, resultCard, tabRandom, tabWheel, viewRandom, viewWheel,
    popupEmpty
} from './dom.js';

export function showEmptyPopup() {
    popupEmpty.classList.remove('hidden');
}

export function hideEmptyPopup() {
    popupEmpty.classList.add('hidden');
}

export function showLoader() {
    resultCard.classList.add('hidden');
    loader.classList.remove('hidden');
    
    // Manage buttons
    // @ts-ignore
    btnMain.disabled = true;
    btnMain.classList.add('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
    resultCard.classList.remove('hidden');
    
    // Auto Scroll for better UX
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Manage buttons
    btnMain.classList.add('hidden');
    // @ts-ignore
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
