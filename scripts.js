// texte fuer das dropdown
var themeLabels = {
    light: 'Light mode',
    dark: 'Dark mode',
    sexy: 'Sexy mode'
};

// welches hero bild zu welchem theme gehoert
var heroImages = {
    light: './images/hero-img/hero-img-light.png',
    dark: './images/hero-img/hero-img-dark.png',
    sexy: './images/hero-img/hero-img-pink.png'
};

// welches mission bild zu welchem theme gehoert
var missionImages = {
    light: './images/mission-image/it-hero-light.png', 
    dark: './images/mission-image/it-hero-dark.png', 
    sexy: './images/mission-image/it-hero-pink.png'
};

// variablen fuer wichtige elemente definieren
var switcher = document.getElementById('theme-switcher'); //
var menuButton = document.getElementById('theme-menu-button'); 
var menu = document.getElementById('theme-menu');
var heroImage = document.querySelector('.hero-image'); 
var missionImage = document.querySelector('.mission-image');
var themeSelectValue = document.getElementById('theme-select-value'); // holt den text fuer das aktuelle theme
var menuItems = document.querySelectorAll('[data-theme-option]'); // holt alle theme buttons


// aendert die seite basierend auf dem gewählten theme
function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName); // setzt das theme am html tag

    if (themeName === 'dark') {
        heroImage.src = heroImages.dark; 
        missionImage.src = missionImages.dark; 
        themeSelectValue.textContent = themeLabels.dark; // setzt den dark text im menue
    } else if (themeName === 'sexy') {
        heroImage.src = heroImages.sexy;
        missionImage.src = missionImages.sexy;
        themeSelectValue.textContent = themeLabels.sexy; // setzt den sexy text im menue
    } else {
        heroImage.src = heroImages.light; 
        missionImage.src = missionImages.light; 
        themeSelectValue.textContent = themeLabels.light; // setzt den light text im menue
    }

    for (var i = 0; i < menuItems.length; i++) { // geht durch alle theme buttons
        if (menuItems[i].dataset.themeOption === themeName) { // prueft ob der button zum theme passt
            menuItems[i].classList.add('is-active'); // setzt den aktiven button
        } else {
            menuItems[i].classList.remove('is-active'); // entfernt aktiv bei den anderen buttons
        }
    }

    switcher.classList.remove('is-open'); // macht den offenen zustand weg
    menu.hidden = true; // versteckt das menue
}


applyTheme('light'); // setzt beim start das light theme

// button klappt das menu auf und zu
menuButton.addEventListener('click', function () { // reagiert auf klick auf den button
    if (menu.hidden) { 
        menu.hidden = false; // zeigt das menu an
        switcher.classList.add('is-open'); // setzt den offenen zustand fuer das menue
    } else {
        menu.hidden = true; // versteckt das menue wieder
        switcher.classList.remove('is-open'); // entfernt den offenen zustand fuer das menue
    }
});

// klick auf ein item wechselt das theme
for (var i = 0; i < menuItems.length; i++) { // geht durch alle theme buttons
    menuItems[i].addEventListener('click', function () { // reagiert auf klick auf einen theme button
        applyTheme(this.dataset.themeOption); // setzt das theme vom geklickten button
    });
}
