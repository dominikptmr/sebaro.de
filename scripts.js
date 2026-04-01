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

// wichtige elemente holen
var switcher = document.getElementById('theme-switcher');
var menuButton = document.getElementById('theme-menu-button');
var menu = document.getElementById('theme-menu');
var heroImage = document.querySelector('.hero-image');
var themeSelectValue = document.getElementById('theme-select-value');
var menuItems = Array.from(document.querySelectorAll('[data-theme-option]'));

// hier wird alles umgestellt wenn sich das theme aendert
function applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    heroImage.src = heroImages[themeName];
    themeSelectValue.textContent = themeLabels[themeName];

    menuItems.forEach(function (menuItem) {
        var isActive = menuItem.dataset.themeOption === themeName;
        menuItem.classList.toggle('is-active', isActive);
    });

    switcher.classList.remove('is-open');
    menu.hidden = true;
}

// beim start ist light aktiv
applyTheme('light');

// button klappt das menu auf und zu
menuButton.addEventListener('click', function () {
    var isOpen = menu.hidden;
    switcher.classList.toggle('is-open', isOpen);
    menu.hidden = !isOpen;
});

// klick auf ein item wechselt das theme
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        applyTheme(menuItem.dataset.themeOption);
    });
});

