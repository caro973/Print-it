const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Utilisez vos données existantes - supprimez ce tableau d'exemple
// et gardez seulement votre tableau slides original

// Variable pour suivre le slide actuel
let currentSlide = 0;

// SÉLECTION DES ÉLÉMENTS
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// FONCTIONS DE NAVIGATION
function handleLeftClick() {
    console.log('Clic sur la flèche gauche - Image précédente');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function handleRightClick() {
    console.log('Clic sur la flèche droite - Image suivante');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

// FONCTION DE MISE À JOUR DU SLIDER
function updateSlider() {
    // Mise à jour de l'image
    const bannerImg = document.querySelector('.banner-img');
    if (bannerImg) {
        bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    }
    
    // Mise à jour du texte
    const bannerText = document.querySelector('#banner p');
    if (bannerText) {
        bannerText.innerHTML = slides[currentSlide].tagLine;
    }
    
    // Mise à jour des dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentSlide);
    });
}

// CRÉATION DES DOTS
function createDots() {
    if (dotsContainer) {
        // Vider le conteneur avant de créer les dots
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            
            // Le premier dot est actif par défaut
            if (i === 0) {
                dot.classList.add('dot_selected');
            }
            
            // Ajouter un event listener pour chaque dot
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateSlider();
            });
            
            dotsContainer.appendChild(dot);
        }
    }
}

// AJOUT DES EVENT LISTENERS
if (arrowLeft) {
    arrowLeft.addEventListener('click', handleLeftClick);
}

if (arrowRight) {
    arrowRight.addEventListener('click', handleRightClick);
}

// INITIALISATION
createDots();
updateSlider(); // Initialiser le premier slide