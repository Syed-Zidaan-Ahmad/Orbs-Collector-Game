# 🎮 Orbs Collector Game

## A fast-paced, colorful Progressive Web App (PWA) arcade game where you collect endless orbs, dodge the void, and beat your high score!

**Developed by: Zidaan**

---

## ✨ Overview

Bring classic arcade fun to your browser with this lightweight, responsive, and highly addictive web game.

It transforms a simple Python concept into a **dynamic, cross-platform experience** complete with:

* 🎮 Smooth PC & Mobile Controls
* 🌈 Infinite Vibrant Colors
* 🎵 Responsive Audio Cues (Beeps)
* 📱 Progressive Web App (PWA) Support
* ℹ️ Built-in Installation Guide

Whether you want to kill some time, test your reflexes, or showcase your game development skills, this game delivers a smooth and enjoyable experience.

---

## 🚀 Play Online

### Try the game now:

🔗 **https://syed-zidaan-ahmad.github.io/Orbs-Collector-Game/**

If you enjoy the game, don't forget to ⭐ star the repository and share it with others!

---

## 🚀 Features

### ✅ Classic Arcade Gameplay

Move your player block left and right to catch the falling orbs. Don't let them hit the ground!

### ✅ Cross-Platform Controls

**PC**

* Left Arrow Key ←
* Right Arrow Key →

**Mobile**

* Large responsive touch controls
* Optimized for fast tapping and smooth gameplay

### ✅ Infinite Color Generation

Every orb collected generates a brand-new vibrant neon color using HSL color logic, ensuring visually appealing gameplay with minimal color repetition.

### ✅ Audio Feedback

Uses the native Web Audio API to generate satisfying retro-style beeps whenever you score points.

### ✅ Built-In Info Button

A convenient ℹ️ button provides:

* Installation instructions for phones and desktops
* Gameplay guidance
* Smooth scrolling interface
* Custom Traffic-Light themed scrollbars

### ✅ Responsive Canvas Design

The game maintains its classic 800×600 gameplay area while scaling perfectly across modern devices without distortion.

### ✅ Progressive Web App (PWA)

Install directly on:

* Android Devices
* iPhones/iPads
* Windows PCs
* macOS Devices

Benefits:

* Works offline after first load
* App-like experience
* Fast startup times
* Home screen and taskbar support

---

## 💡 Project Idea

This project began as a simple Python game concept and was successfully ported to the modern web.

The objective was to preserve the original arcade feel while introducing modern web capabilities such as:

* Touch controls
* Offline caching
* Responsive layouts
* Installable app support

All achieved using:

* HTML5
* CSS3
* Vanilla JavaScript

**No external libraries or frameworks required.**

---

## 🛠️ Setup Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Syed-Zidaan-Ahmad/Orbs-Collector-Game.git
```

Or simply download the ZIP file and extract it.

### 2️⃣ PWA Configuration

The repository already includes:

* `manifest.json`
* `sw.js`

For full installability, add the following icons to the project root:

```
icon-192.png
icon-512.png
```

Ensure the filenames match those specified inside `manifest.json`.

### 3️⃣ Run Locally

Simply open:

```text
index.html
```

in your preferred browser.

#### Optional

To test Service Worker functionality and offline mode, use a local server such as:

* VS Code Live Server Extension

---

## ✍️ Customization Tips

### 🏎️ Game Difficulty

Inside `script.js`:

```javascript
const playerSpeed = 5;
const coinSpeed = 3;
```

Increase these values to make the game faster and more challenging.

### 🎨 Color Palette

Modify the `getVibrantColor()` function inside `script.js` to customize the color generation system.

### 📏 Player Size

```javascript
const playerWidth = 50;
const playerHeight = 50;
```

Adjust these values to resize the player block.

### ℹ️ Info Button

The Info Button content can be customized directly in `index.html`.

---

## 🛡️ Privacy & Data Usage

### ✅ Zero Tracking

No analytics, cookies, trackers, or third-party scripts.

### ✅ 100% Local

Gameplay and high scores remain entirely within your browser.

### ✅ No Permissions Required

The game does not request access to:

* Camera
* Microphone
* Location
* Contacts

---

## 🌐 Deployment

You can host this game for free using:

* GitHub Pages (Recommended)
* Netlify
* Vercel

Simply upload the project files and deploy.

For GitHub Pages:

1. Push files to your repository.
2. Open Repository Settings.
3. Navigate to Pages.
4. Select the deployment branch.
5. Save changes.

Your game will be live within minutes.

---

## 🏆 Why This Project Stands Out

✅ Pure Vanilla JavaScript

✅ Lightweight and Fast

✅ Mobile & Desktop Friendly

✅ Responsive Design

✅ Progressive Web App Ready

✅ Offline Support

✅ Easy to Read and Customize

✅ No External Dependencies

---

## 🤝 Contributing

Contributions are welcome!

Feel free to:

* Fork the repository
* Improve gameplay
* Add new game modes
* Introduce obstacles
* Enhance visual effects
* Implement cloud-based high scores

Pull Requests are always appreciated.

---

## 🎉 Final Words

Keep catching those Orbs and aim for a new high score!

If you enjoyed this project:

⭐ Star the repository

🍴 Fork it

📢 Share it with others

Thank you for checking out **Orbs Collector Game**!

Happy Gaming! 🎮
