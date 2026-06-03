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
    { en: "Raspberry", fr: "Framboise", emoji: "🔴", level: 1 },
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
let unlockedBadges = []; 
let audioSpeed = 1.0;
let filterOnlyFavs = false;
let searchDirection = 'EN_FR';
let globalAudioCtx = null; // Instance unique partagée 
let selectedVocabularyLevel = 1; 

// --- CONFIGURATION DES BADGES ---
const badgesDatabase = [
    { id: "first_perfect", title: "Sans Faute !", desc: "Faire un 10/10 en QCM ou Writing", icon: "🏅", color: "bg-yellow-500" },
    { id: "streak_15", title: "Inarrêtable", desc: "Atteindre une série de 15 bonnes réponses", icon: "🔥", color: "bg-orange-500" },
    { id: "time_20", title: "Chasseur de Chrono", desc: "Marquer 20 points en Time Attack", icon: "⚡", color: "bg-cyan-500" },
    { id: "polyglotte", title: "Polyglotte", desc: "Débloquer le niveau 2 de vocabulaire", icon: "🗣️", color: "bg-purple-500" }
];

// --- ALGORITHME DE RÉPÉTITION ESPACÉE ---
function getNextExerciseWord() {
    const currentLevelWords = fruitsData.filter(f => f.level === parseInt(selectedVocabularyLevel));
    const currentLevelErrors = errorHistory.filter(err => err.level === parseInt(selectedVocabularyLevel));

    if (currentLevelErrors.length > 0 && Math.random() < 0.35) {
        return currentLevelErrors[Math.floor(Math.random() * currentLevelErrors.length)];
    }
    return currentLevelWords[Math.floor(Math.random() * currentLevelWords.length)];
}

// --- LOGIQUE DES BADGES ---
function checkAndUnlockBadge(badgeId) {
    if (!unlockedBadges.includes(badgeId)) {
        unlockedBadges.push(badgeId);
        localStorage.setItem('oe_unlocked_badges', JSON.stringify(unlockedBadges));
        triggerConfetti();
        if(typeof renderBadgesUI === 'function') renderBadgesUI();
    }
}

// --- MODULE AUDIO DE HAUTE PRÉCISION (CORRIGÉ) ---
let preferredVoice = null;

// Fonction de sélection de la meilleure voix disponible sur l'appareil
function initVoices() {
    if (!('speechSynthesis' in window)) return;
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return; // Le navigateur n'est pas encore prêt

    // Stratégie de sélection en 3 étapes :
    // 1. On cherche une voix anglaise moderne (Google, Natural, Neural ou Premium)
    let bestVoice = voices.find(voice => 
        voice.lang.toLowerCase().startsWith('en') && 
        (voice.name.includes('Google') || voice.name.includes('Natural') || voice.name.includes('Neural') || voice.name.includes('Premium'))
    );

    // 2. Si pas trouvé, on cherche une voix anglaise qui n'est PAS une vieille voix "Desktop" de Microsoft
    if (!bestVoice) {
        bestVoice = voices.find(voice => 
            voice.lang.toLowerCase().startsWith('en') && !voice.name.includes('Desktop')
        );
    }

    // 3. En dernier recours, on prend la première voix anglaise standard qui vient
    if (!bestVoice) {
        bestVoice = voices.find(voice => voice.lang.toLowerCase().startsWith('en'));
    }

    // On mémorise la voix pour éviter de refaire la recherche à chaque clic
    if (bestVoice) {
        preferredVoice = bestVoice;
    }
}

// Écouteur crucial : déclenché dès que le navigateur a fini de charger sa base de données vocales
if ('speechSynthesis' in window) {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = initVoices;
    }
    initVoices(); // Premier essai immédiat au cas où elles seraient déjà prêtes
}

function setAudioSpeed(speed) {
    audioSpeed = speed;
    const btnNormal = document.getElementById('speed-normal');
    const btnSlow = document.getElementById('speed-slow');
    if (btnNormal && btnSlow) {
        if (speed === 1.0) {
            btnNormal.className = "px-2 py-1 bg-brandBlue text-white rounded font-bold";
            btnSlow.className = "px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded flex items-center gap-1";
        } else {
            btnNormal.className = "px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded font-bold";
            btnSlow.className = "px-2 py-1 bg-brandBlue text-white rounded flex items-center gap-1";
        }
    }
}

function playAudio(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stoppe net toute lecture en cours
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = audioSpeed;

        // Si la voix n'a pas pu être choisie au démarrage, on fait une tentative de secours
        if (!preferredVoice) initVoices();

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        window.speechSynthesis.speak(utterance);
    } else {
        // Fallback ultime si l'appareil ne supporte aucune synthèse vocale native
        const encodedText = encodeURIComponent(text.toLowerCase());
        const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodedText}`;
        const audio = new Audio(audioUrl);
        audio.playbackRate = audioSpeed;
        audio.play().catch(e => console.log("Audio playback failed:", e));
    }
}


function playSoundEffect(type) {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    // Initialisation paresseuse au premier clic utilisateur
    if (!globalAudioCtx) {
        globalAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Sort de la mise en veille si le navigateur avait bloqué le flux audio
    if (globalAudioCtx.state === 'suspended') {
        globalAudioCtx.resume();
    }

    const osc = globalAudioCtx.createOscillator();
    const gain = globalAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(globalAudioCtx.destination);

    if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, globalAudioCtx.currentTime);
        osc.frequency.setValueAtTime(659.25, globalAudioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, globalAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, globalAudioCtx.currentTime + 0.3);
        osc.start(); osc.stop(globalAudioCtx.currentTime + 0.3);
    } else if (type === 'fail') {
        osc.frequency.setValueAtTime(196.00, globalAudioCtx.currentTime);
        osc.frequency.setValueAtTime(146.83, globalAudioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, globalAudioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, globalAudioCtx.currentTime + 0.4);
        osc.start(); osc.stop(globalAudioCtx.currentTime + 0.4);
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

// --- GESTION DE LA PROGRESSION ---
function getUserPlayerLevel() {
    return Math.floor(totalPoints / 150) + 1;
}

function updateLevelAndTitle() {
    const pLevel = getUserPlayerLevel();
    const levelEl = document.getElementById('user-level');
    const titleEl = document.getElementById('user-title');
    
    if (levelEl) levelEl.innerText = pLevel;

    let title = "Novice des Fruits";
    if (pLevel >= 2) title = "Apprenti Fruitier";
    if (pLevel >= 3) title = "Verger Connaisseur";
    if (pLevel >= 5) {
        title = "Expert Botanique";
        checkAndUnlockBadge("polyglotte"); 
    }
    if (pLevel >= 10) title = "Maître des Vergers";

    if (titleEl) titleEl.innerText = title;
    if (typeof updateLevelLockUI === 'function') updateLevelLockUI();
}

// --- MODULE DARK MODE (AJOUTÉ) ---
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('oe_dark_mode', isDark);
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.className = isDark ? "fa-solid fa-sun text-yellow-300" : "fa-solid fa-moon text-yellow-300";
    }
}

// --- RÉINITIALISATION DES STATISTIQUES (AJOUTÉ) ---
function resetStats() {
    if (confirm("Êtes-vous sûr de vouloir réinitialiser toutes vos statistiques et votre progression ?")) {
        const keysToRemove = ['oe_total_points', 'oe_high_quiz', 'oe_high_speak', 'oe_high_timeattack', 'oe_max_streak', 'oe_fav_fruits', 'oe_error_history', 'oe_unlocked_badges'];
        keysToRemove.forEach(key => localStorage.removeItem(key));

        totalPoints = 0;
        highScores = { quiz: 0, speak: 0, timeattack: 0 };
        maxStreak = 0;
        currentStreak = 0;
        errorHistory = [];
        unlockedBadges = [];
        favoriteFruits = [];

        document.getElementById('total-points').innerText = totalPoints;
        document.getElementById('streak-count').innerText = currentStreak;
        document.getElementById('stat-high-quiz').innerText = 0;
        document.getElementById('stat-high-speak').innerText = 0;
        document.getElementById('stat-high-timeattack').innerText = 0;
        document.getElementById('stat-max-streak').innerText = 0;

        updateLevelAndTitle();

        if (typeof renderDict === 'function') renderDict();
        if (typeof updateFlashcard === 'function') updateFlashcard();
        if (typeof renderBadgesUI === 'function') renderBadgesUI();
        if (typeof renderErrorHistory === 'function') renderErrorHistory();

        alert("Statistiques réinitialisées avec succès !");
    }
}

// --- PERSISTENCE ---
function saveStats() {
    localStorage.setItem('oe_total_points', totalPoints);
    localStorage.setItem('oe_high_quiz', highScores.quiz);
    localStorage.setItem('oe_high_speak', highScores.speak); 
    localStorage.setItem('oe_high_timeattack', highScores.timeattack);
    localStorage.setItem('oe_max_streak', maxStreak);
}

function loadStats() {
    totalPoints = parseInt(localStorage.getItem('oe_total_points')) || 0;
    highScores.quiz = parseInt(localStorage.getItem('oe_high_quiz')) || 0;
    highScores.speak = parseInt(localStorage.getItem('oe_high_speak')) || 0; 
    highScores.timeattack = parseInt(localStorage.getItem('oe_high_timeattack')) || 0;
    maxStreak = parseInt(localStorage.getItem('oe_max_streak')) || 0;
    favoriteFruits = JSON.parse(localStorage.getItem('oe_fav_fruits')) || [];
    errorHistory = JSON.parse(localStorage.getItem('oe_error_history')) || [];
    unlockedBadges = JSON.parse(localStorage.getItem('oe_unlocked_badges')) || [];
    
    if (localStorage.getItem('oe_dark_mode') === 'true') {
        document.documentElement.classList.add('dark');
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = "fa-solid fa-sun text-yellow-300";
    }

    const totalPointsEl = document.getElementById('total-points');
    if (totalPointsEl) totalPointsEl.innerText = totalPoints;
    
    updateLevelAndTitle();
}