// texte fuer das menu
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
var switcher = document.getElementById('theme-switcher'); // holt den theme switcher
var menuButton = document.getElementById('theme-menu-button'); // holt den button fuer das menu
var menu = document.getElementById('theme-menu'); // holt das menu mit den theme optionen
var heroImage = document.querySelector('.hero-image'); // holt das hero bild
var missionImage = document.querySelector('.mission-image'); // holt das mission bild
var themeSelectValue = document.getElementById('theme-select-value'); // holt den text fuer das aktuelle theme
var menuItems = document.querySelectorAll('[data-theme-option]'); // holt alle theme buttons


// aendert die seite basierend auf dem gewählten theme
function applyTheme(themeName) { // stellt die seite auf das gewaehlte theme um
    document.documentElement.setAttribute('data-theme', themeName); // setzt das theme am html tag

    if (themeName === 'dark') { // prueft ob dark aktiv ist
        heroImage.src = heroImages.dark; // setzt das dark hero bild
        missionImage.src = missionImages.dark; // setzt das dark mission bild
        themeSelectValue.textContent = themeLabels.dark; // setzt den dark text im menu
    } else if (themeName === 'sexy') { // prueft ob sexy aktiv ist
        heroImage.src = heroImages.sexy; // setzt das sexy hero bild
        missionImage.src = missionImages.sexy; // setzt das sexy mission bild
        themeSelectValue.textContent = themeLabels.sexy; // setzt den sexy text im menu
    } else {
        heroImage.src = heroImages.light; // setzt das light hero bild
        missionImage.src = missionImages.light; // setzt das light mission bild
        themeSelectValue.textContent = themeLabels.light; // setzt den light text im menu
    }

    for (var i = 0; i < menuItems.length; i++) { // geht durch alle theme buttons
        if (menuItems[i].dataset.themeOption === themeName) { // prueft ob der button zum theme passt
            menuItems[i].classList.add('is-active'); // setzt den aktiven button
        } else {
            menuItems[i].classList.remove('is-active'); // entfernt aktiv bei den anderen buttons
        }
    }

    switcher.classList.remove('is-open'); // macht den offenen zustand weg
    menu.hidden = true; // versteckt das menu
}

// beim start ist light aktiv
applyTheme(document.documentElement.getAttribute('data-theme') || 'light'); // setzt beim start das theme

// button klappt das menu auf und zu
menuButton.addEventListener('click', function () { // reagiert auf klick auf den button
    if (menu.hidden) { // prueft ob das menu versteckt ist
        menu.hidden = false; // zeigt das menu an
        switcher.classList.add('is-open'); // setzt den offenen zustand
    } else {
        menu.hidden = true; // versteckt das menu wieder
        switcher.classList.remove('is-open'); // entfernt den offenen zustand
    }
});

// klick auf ein item wechselt das theme
for (var i = 0; i < menuItems.length; i++) { // geht durch alle theme buttons
    menuItems[i].addEventListener('click', function () { // reagiert auf klick auf ein menu item
        applyTheme(this.dataset.themeOption); // setzt das theme vom geklickten button
    });
}
