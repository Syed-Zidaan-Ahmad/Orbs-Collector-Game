// Orbs Collector Game (JavaScript Part)
// Program by Zidaan
// Variables and Constants
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const quitBtn = document.getElementById('quitBtn');
const gameInstructions = document.getElementById('gameInstructions');
// Info Modal Elements
const infoButton = document.getElementById('infoButton');
const infoModal = document.getElementById('infoModal');
// Open Modal
infoButton.addEventListener('click', () => {
    infoModal.style.display = 'block';
    setTimeout(() => {
        infoModal.classList.add('active');
    }, 10);
});
// Close Modal
window.closeInfoModal = function() {
    infoModal.classList.remove('active');
    setTimeout(() => {
        infoModal.style.display = 'none';
    }, 300);
};
// Game Dimensions
const gameWidth = 800;
const gameHeight = 600;
// Player Variables
const playerWidth = 50;
const playerHeight = 50;
let playerX = gameWidth / 2 - playerWidth / 2;
let playerY = gameHeight - playerHeight - 10;
const playerSpeed = 5;
let playerColor = "#ffffff";
// No Repeating Colors Logic
let lastHue = -1;
function getVibrantColor() {
    let hue;
    let isTooClose = true;
    // Loop to ensure new hue is at least 60 degrees apart from the last one
    while (isTooClose) {
        hue = Math.floor(Math.random() * 360);
        // Checking if the new hue is too close to the last hue
        if (lastHue === -1) {
            isTooClose = false; 
        } else {
            let diff = Math.abs(hue - lastHue);
            let minDiff = Math.min(diff, 360 - diff);
            
            if (minDiff >= 60) {
                isTooClose = false;
            }
        }
    }
    lastHue = hue;
    return `hsl(${hue}, 100%, 60%)`;
}
// Orb Variables
const coinRadius = 15;
let coinX = Math.floor(Math.random() * (gameWidth - coinRadius * 2)) + coinRadius;
let coinY = -coinRadius;
const coinSpeed = 3;
let coinColor = getVibrantColor();
let score = 0;
let isRunning = true;
let isGameOverScreen = false;
// Input Variables
let moveLeft = false;
let moveRight = false;
// Text Messages
const message = "Test Your Reflexes!";
const message2 = "Catch Orbs, Score Points";
const message3 = "PC: Arrows | Phone: Buttons";
const message4 = "A game by Zidaan"; 
// Beep Sound Function
function playBeep() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); 
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1); 
    } catch (e) {
        console.log("Beep blocked by browser");
    }
}
// Input Handling for PC
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveLeft = true;
    if (e.key === 'ArrowRight') moveRight = true;
});
// Stop movement when keys are released
window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') moveLeft = false;
    if (e.key === 'ArrowRight') moveRight = false;
});
// Input Handling for Mobile
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
// Left Button Events
btnLeft.addEventListener('pointerdown', () => moveLeft = true);
btnLeft.addEventListener('pointerup', () => moveLeft = false);
btnLeft.addEventListener('pointerleave', () => moveLeft = false);
// Right Button Events
btnRight.addEventListener('pointerdown', () => moveRight = true);
btnRight.addEventListener('pointerup', () => moveRight = false);
btnRight.addEventListener('pointerleave', () => moveRight = false);
// Quit Game Logic
quitBtn.addEventListener('click', () => {
    isRunning = false;
    isGameOverScreen = true;
    quitBtn.style.display = 'none'; 
    gameInstructions.style.display = 'none'; 
});
// Main Update Logic
function update() {
    if (!isRunning) return;
    if (moveLeft && playerX > 0) {
        playerX -= playerSpeed;
    }
    if (moveRight && playerX < gameWidth - playerWidth) {
        playerX += playerSpeed;
    }
    coinY += coinSpeed;
    // Collision Detection
    if (playerX < coinX + coinRadius && 
        playerX + playerWidth > coinX - coinRadius && 
        playerY < coinY + coinRadius && 
        playerY + playerHeight > coinY - coinRadius) {
        coinX = Math.floor(Math.random() * (gameWidth - coinRadius * 2)) + coinRadius;
        coinY = -coinRadius;
        score += 1;
        playBeep();
        let newColor = getVibrantColor();
        coinColor = newColor;
        playerColor = newColor; 
    }
    // Game Over
    if (coinY > gameHeight + coinRadius) {
        coinX = Math.floor(Math.random() * (gameWidth - coinRadius * 2)) + coinRadius;
        coinY = -coinRadius;
        coinColor = getVibrantColor();
    }
}
// Rendering Logic
function draw() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, gameWidth, gameHeight);
    // Draw Player and Coin
    if (isRunning) {
        ctx.fillStyle = playerColor;
        ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
        ctx.fillStyle = coinColor;
        ctx.beginPath();
        ctx.arc(coinX, coinY, coinRadius, 0, Math.PI * 2);
        ctx.fill();
        // Score Centered
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 36px Arial"; 
        ctx.textAlign = "center"; 
        ctx.fillText("Score: " + score, gameWidth / 2, 50);
        let centerX = gameWidth / 2;
        let centerY = gameHeight / 2 - 40;  
        // Top 3 messages in White
        ctx.fillStyle = "#ffffff";
        ctx.font = "36px Arial"; 
        ctx.fillText(message, centerX, centerY);
        ctx.fillText(message2, centerX, centerY + 40);
        ctx.fillText(message3, centerX, centerY + 80);
        ctx.fillStyle = "#0ef"; 
        ctx.font = "bold 28px Arial"; 
        ctx.fillText(message4, centerX, centerY + 130); 
    } else if (isGameOverScreen) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "36px Arial";
        ctx.textAlign = "center";
        let centerX = gameWidth / 2;
        let centerY = gameHeight / 2;
        const finalMessage = "Game Over !!! You got " + score + " Orbs";
        const a = "I Hope You Enjoyed This Game";
        const z = "A Game Developed by :-> Zidaan";
        ctx.fillText(finalMessage, centerX, centerY);
        ctx.fillText(a, centerX, centerY + 50);
        ctx.fillStyle = "#0ef";
        ctx.fillText(z, centerX, centerY + 100);
    }
}
// Main Game Loop
function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
// Start Game Loop
requestAnimationFrame(loop);
// Service Worker Registration for PWA Functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('Service Worker Registered!', reg.scope))
            .catch(err => console.error('Service Worker Registration Failed!', err));
    });
}
// End of Program
