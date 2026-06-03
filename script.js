// --- BASE DE DONNÉES CONSOLIDÉE (60 Fruits sur 3 Niveaux) ---
const fruitsData = [
    // NIVEAU 1 (20 fruits de base - Accessible immédiatement)
    { en: "Apple", fr: "Pomme", emoji: "🍎", level: 1 },
    { en: "Banana", fr: "Banane", emoji: "🍌", level: 1 },
    { en: "Orange", fr: "Orange", emoji: "🍊", level: 1 },
    { en: "Strawberry", fr: "Fraise", emoji: "🍓", level: 1 },
    { en: "Grape", fr: "Raisin", emoji: "🍇", level: 1 },
    { en: "Watermelon", fr: "Pastèque", emoji: "🍉", level: 1 },
    { en: "Lemon", fr: "Citron", emoji: "🍋", level: 1 },
    { en: "Peach", fr: "Pêche", emoji: "🍑", level: 1 },
    { en: "Cherry", fr: "Cerise", emoji: "🍒", level: 1 },
    { en: "Pineapple", fr: "Ananas", emoji: "🍍", level: 1 },
    { en: "Mango", fr: "Mangue", emoji: "🥭", level: 1 },
    { en: "Pear", fr: "Poire", emoji: "🍐", level: 1 },
    { en: "Raspberry", fr: "Framboise", emoji: "🔴", level: 1 }, // Option A validée
    { en: "Blueberry", fr: "Myrtille", emoji: "🫐", level: 1 },
    { en: "Kiwi", fr: "Kiwi", emoji: "🥝", level: 1 },
    { en: "Plum", fr: "Prune", emoji: "🟣", level: 1 }, 
    { en: "Avocado", fr: "Avocat", emoji: "🥑", level: 1 },
    { en: "Coconut", fr: "Noix de coco", emoji: "🥥", level: 1 },
    { en: "Melon", fr: "Melon", emoji: "🍈", level: 1 },
    { en: "Fig", fr: "Figue", emoji: "🟤", level: 1 },

    // NIVEAU 2 (20 fruits intermédiaires - Débloqué au Niveau joueur 5)
    { en: "Blackberry", fr: "Mûre", emoji: "🫐", level: 2 },
    { en: "Apricot", fr: "Abricot", emoji: "🍑", level: 2 },
    { en: "Grapefruit", fr: "Pamplemousse", emoji: "🍊", level: 2 },
    { en: "Lime", fr: "Citron vert", emoji: "🍋", level: 2 },
    { en: "Cranberry", fr: "Canneberge", emoji: "🍒", level: 2 },
    { en: "Passion fruit", fr: "Fruit de la passion", emoji: "🟣", level: 2 },
    { en: "Pomegranate", fr: "Grenade", emoji: "🍎", level: 2 },
    { en: "Lychee", fr: "Litchi", emoji: "🔴", level: 2 },
    { en: "Papaya", fr: "Papaye", emoji: "🥭", level: 2 },
    { en: "Guava", fr: "Goyave", emoji: "🍏", level: 2 },
    { en: "Date", fr: "Datte", emoji: "🟤", level: 2 },
    { en: "Blackcurrant", fr: "Cassis", emoji: "🟤", level: 2 },
    { en: "Redcurrant", fr: "Groseille", emoji: "🔴", level: 2 },
    { en: "Tangerine", fr: "Mandarine", emoji: "🍊", level: 2 },
    { en: "Clementine", fr: "Clémentine", emoji: "🍊", level: 2 },
    { en: "Persimmon", fr: "Kaki", emoji: "🍅", level: 2 },
    { en: "Gooseberry", fr: "Groseille à maquereau", emoji: "🟢", level: 2 },
    { en: "Dragon fruit", fr: "Fruit du dragon", emoji: "🐲", level: 2 },
    { en: "Rhubarb", fr: "Rhubarbe", emoji: "🌿", level: 2 },
    { en: "Quince", fr: "Coing", emoji: "🍏", level: 2 },

    // NIVEAU 3 (20 fruits avancés/exotiques - Débloqué au Niveau joueur 10)
    { en: "Starfruit", fr: "Carambole", emoji: "⭐", level: 3 },
    { en: "Jackfruit", fr: "Jacquier", emoji: "🍏", level: 3 },
    { en: "Durian", fr: "Durian", emoji: "🦔", level: 3 },
    { en: "Rambutan", fr: "Ramboutan", emoji: "🔴", level: 3 },
    { en: "Mangosteen", fr: "Mangoustan", emoji: "🟣", level: 3 },
    { en: "Kumquat", fr: "Kumquat", emoji: "🍊", level: 3 },
    { en: "Elderberry", fr: "Baie de sureau", emoji: "🍇", level: 3 },
    { en: "Mulberry", fr: "Mûre de ronce", emoji: "🫐", level: 3 },
    { en: "Jujube", fr: "Datte chinoise", emoji: "🟤", level: 3 },
    { en: "Tamarind", fr: "Tamarin", emoji: "🟤", level: 3 },
    { en: "Plantain", fr: "Banane plantain", emoji: "🍌", level: 3 },
    { en: "Blood orange", fr: "Orange sanguine", emoji: "🍊", level: 3 },
    { en: "Pomelo", fr: "Pomélo", emoji: "🟢", level: 3 },
    { en: "Boysenberry", fr: "Mûroise", emoji: "🍇", level: 3 },
    { en: "Feijoa", fr: "Goyave du Brésil", emoji: "🟢", level: 3 },
    { en: "Longan", fr: "Longane", emoji: "🟤", level: 3 },
    { en: "Salak", fr: "Fruit serpent", emoji: "🟤", level: 3 },
    { en: "Breadfruit", fr: "Fruit à pain", emoji: "🟢", level: 3 },
    { en: "Medlar", fr: "Nèfle", emoji: "🟤", level: 3 },
    { en: "Prickly pear", fr: "Figue de Barbarie", emoji: "🌵", level: 3 }
];

// --- ÉTATS GÉNÉRAUX & STATISTIQUES ---
let currentStreak = 0, maxStreak = 0, totalPoints = 0;
let highScores = { quiz: 0, speak: 0, timeattack: 0 };
let favoriteFruits = [];
let errorHistory = []; 
let unlockedBadges = []; // Stocke les IDs des badges obtenus
let audioSpeed = 1.0;
let filterOnlyFavs = false;
let searchDirection = 'EN_FR'; 
let selectedVocabularyLevel = 1; // Niveau de liste actuellement sélectionné par l'élève

// --- CONFIGURATION DES BADGES ---
const badgesDatabase = [
    { id: "first_perfect", title: "Sans Faute !", desc: "Faire un 10/10 en QCM ou Writing", icon: "🏅", color: "bg-yellow-500" },
    { id: "streak_15", title: "Inarrêtable", desc: "Atteindre une série de 15 bonnes réponses", icon: "🔥", color: "bg-orange-500" },
    { id: "time_20", title: "Chasseur de Chrono", desc: "Marquer 20 points en Time Attack", icon: "⚡", color: "bg-cyan-500" },
    { id: "polyglotte", title: "Polyglotte", desc: "Débloquer le niveau 2 de vocabulaire", icon: "🗣️", color: "bg-purple-500" }
];

// --- ALGORITHME DE RÉPÉTITION ESPACÉE (Spaced Repetition) ---
// Récupère les mots disponibles selon le niveau choisi, mais injecte 35% de chances
// de faire réapparaître un mot raté présent dans le carnet de révision de l'élève.
function getNextExerciseWord() {
    const currentLevelWords = fruitsData.filter(f => f.level === parseInt(selectedVocabularyLevel));
    
    // Filtrer les erreurs qui appartiennent au niveau actuel de l'élève
    const currentLevelErrors = errorHistory.filter(err => err.level === parseInt(selectedVocabularyLevel));

    if (currentLevelErrors.length > 0 && Math.random() < 0.35) {
        // 35% de chance de piocher une révision ciblée
        return currentLevelErrors[Math.floor(Math.random() * currentLevelErrors.length)];
    }
    
    // Sinon tirage aléatoire classique dans le niveau choisi
    return currentLevelWords[Math.floor(Math.random() * currentLevelWords.length)];
}

// --- LOGIQUE DES BADGES ---
function checkAndUnlockBadge(badgeId) {
    if (!unlockedBadges.includes(badgeId)) {
        unlockedBadges.push(badgeId);
        localStorage.setItem('oe_unlocked_badges', JSON.stringify(unlockedBadges));
        // Animation festive ou alerte discrète gérée dans le relay
        triggerConfetti();
        if(typeof renderBadgesUI === 'function') renderBadgesUI();
    }
}

// --- MODULE AUDIO ---
function playAudio(text) {
    const encodedText = encodeURIComponent(text.toLowerCase());
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodedText}`;
    const audio = new Audio(audioUrl);
    audio.playbackRate = audioSpeed;
    audio.play().catch(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = audioSpeed;
            window.speechSynthesis.speak(utterance);
        }
    });
}

function playSoundEffect(type) {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(); osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'fail') {
        osc.frequency.setValueAtTime(196.00, ctx.currentTime);
        osc.frequency.setValueAtTime(146.83, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start(); osc.stop(ctx.currentTime + 0.4);
    }
}

function triggerConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#F58634', '#52B788', '#1C3D5A', '#FFD166'][Math.floor(Math.random() * 4)];
        confetti.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;
        confetti.style.animationDelay = Math.random() * 1.2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

// --- CARNET DE RÉVISIONS ---
function registerError(fruitObj) {
    if (!errorHistory.some(f => f.en === fruitObj.en)) {
        errorHistory.push(fruitObj);
        localStorage.setItem('oe_error_history', JSON.stringify(errorHistory));
    }
}

function removeError(englishName) {
    errorHistory = errorHistory.filter(f => f.en !== englishName);
    localStorage.setItem('oe_error_history', JSON.stringify(errorHistory));
}

// --- GESTION DE LA PROGRESSION (Calcul des niveaux) ---
function getUserPlayerLevel() {
    return Math.floor(totalPoints / 150) + 1;
}

function updateLevelAndTitle() {
    const pLevel = getUserPlayerLevel();
    document.getElementById('user-level').innerText = pLevel;

    let title = "Novice des Fruits";
    if (pLevel >= 2) title = "Apprenti Fruitier";
    if (pLevel >= 3) title = "Verger Connaisseur";
    if (pLevel >= 5) {
        title = "Expert Botanique";
        checkAndUnlockBadge("polyglotte"); // Débloque le Badge Niveau 5
    }
    if (pLevel >= 10) title = "Maître des Vergers";

    document.getElementById('user-title').innerText = title;
    
    // Appelle la mise à jour des cadenas visuels de l'interface si présente
    if(typeof updateLevelLockUI === 'function') updateLevelLockUI();
}

// --- PERSISTENCE ---
function saveStats() {
    localStorage.setItem('oe_total_points', totalPoints);
    localStorage.setItem('oe_high_quiz', highScores.quiz);
    localStorage.setItem('oe_high_speak', highScores.speak); // Changé ici
    localStorage.setItem('oe_high_timeattack', highScores.timeattack);
    localStorage.setItem('oe_max_streak', maxStreak);
}

function loadStats() {
    totalPoints = parseInt(localStorage.getItem('oe_total_points')) || 0;
    highScores.quiz = parseInt(localStorage.getItem('oe_high_quiz')) || 0;
    highScores.speak = parseInt(localStorage.getItem('oe_high_speak')) || 0; // Changé ici
    highScores.timeattack = parseInt(localStorage.getItem('oe_high_timeattack')) || 0;
    maxStreak = parseInt(localStorage.getItem('oe_max_streak')) || 0;
    favoriteFruits = JSON.parse(localStorage.getItem('oe_fav_fruits')) || [];
    errorHistory = JSON.parse(localStorage.getItem('oe_error_history')) || [];
    unlockedBadges = JSON.parse(localStorage.getItem('oe_unlocked_badges')) || [];
    
    if (localStorage.getItem('oe_dark_mode') === 'true') {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-icon').className = "fa-solid fa-sun text-yellow-300";
    }

    document.getElementById('total-points').innerText = totalPoints;
    updateLevelAndTitle();
}