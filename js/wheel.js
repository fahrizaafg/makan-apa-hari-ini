import { getFilteredFood } from './filter.js';
import { 
    wheel, btnSpin, wheelResultDisplay, wheelFoodName 
} from './dom.js';

let wheelCandidates = [];
let currentRotation = 0;

export function setupWheel() {
    const filtered = getFilteredFood();
    
    if (filtered.length === 0) {
        alert("Gak ada menu buat diputer! Cek filter kamu.");
        return false;
    }

    // Pick max 8 random items for the wheel
    wheelCandidates = [];
    const tempArr = [...filtered];
    const count = Math.min(8, tempArr.length);
    
    for(let i=0; i<count; i++) {
        const idx = Math.floor(Math.random() * tempArr.length);
        wheelCandidates.push(tempArr[idx]);
        tempArr.splice(idx, 1);
    }

    // Colors palette
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43', '#54A0FF', '#5F27CD', '#FF9FF3', '#00d2d3'];
    
    // 1. Build Conic Gradient for Background
    let gradientParts = [];
    const step = 360 / count;
    
    for(let i=0; i<count; i++) {
        const color = colors[i % colors.length];
        const startDeg = i * step;
        const endDeg = (i + 1) * step;
        gradientParts.push(`${color} ${startDeg}deg ${endDeg}deg`);
    }
    
    wheel.style.background = `conic-gradient(from 0deg, ${gradientParts.join(', ')})`;
    wheel.innerHTML = ''; // Clear existing content

    // 2. Add Items (Emojis)
    wheelCandidates.forEach((item, index) => {
        const angle = index * step + (step / 2); // Center of the segment
        
        const itemContainer = document.createElement('div');
        itemContainer.className = 'wheel-item';
        itemContainer.style.transform = `rotate(${angle}deg)`;
        
        const text = document.createElement('div');
        text.className = 'wheel-text';
        // Rotate text back so emojis aren't upside down? 
        // Actually, for a wheel, radial alignment (pointing out) is standard.
        // But emojis look better if upright relative to the viewer when at the top?
        // Let's stick to radial alignment first.
        text.innerHTML = item.emoji;
        
        itemContainer.appendChild(text);
        wheel.appendChild(itemContainer);
    });

    // 3. Add Center Cap
    const centerCap = document.createElement('div');
    centerCap.className = 'wheel-center';
    centerCap.innerHTML = '🍽️';
    wheel.appendChild(centerCap);

    return true;
}

export function spinWheel() {
    if(!setupWheel()) return;

    btnSpin.disabled = true;
    wheelResultDisplay.classList.add('hidden');
    
    // Calculate random spin
    // Minimum 5 spins (360 * 5) + random angle
    // Note: The pointer is at top (0deg). 
    // To land on a specific index, we need to calculate rotation.
    // Winning Angle at top = 360 - (index * step + step/2)
    
    const spinAmount = 1800 + Math.random() * 360; // 5-6 full spins
    currentRotation += spinAmount;
    
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Wait for animation
    setTimeout(() => {
        // Calculate winner based on rotation
        // Normalize rotation to 0-360
        const actualRotation = currentRotation % 360;
        
        // The pointer is at TOP (0 degrees).
        // If wheel rotates +90deg, the segment at -90deg (270deg) is at top.
        // So, pointer angle relative to wheel = (0 - rotation) % 360
        // Correct math:
        // Angle of pointer on wheel = (360 - actualRotation) % 360
        const pointerAngle = (360 - actualRotation) % 360;
        
        const step = 360 / wheelCandidates.length;
        // Index = floor(angle / step)
        const winningIndex = Math.floor(pointerAngle / step);
        
        const winner = wheelCandidates[winningIndex];
        
        wheelFoodName.textContent = `${winner.emoji} ${winner.name}`;
        wheelResultDisplay.classList.remove('hidden');
        btnSpin.disabled = false;
        
    }, 4000); // 4s match CSS transition
}
