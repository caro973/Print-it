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

//Séléction des élements HTML
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

//Fonction pour gérer le clic sur la gauche 

function handleLeftClick() {
	console.log('Clic sur la flêche gauche - Image précédente');
	// Ou avec une alert:
	// alert('Flêche gauche cliquée - Image précédente)
}

//Fonction pour gérer le clic sur la droite

function handleRightClick() {
	console.log('Clic sur la flêche droite - Image suivante ');
	//Ou avec une alert:
	// alert('Flêhce droite cliquée - Image suivante)
}

// Ajout des event listeners
arrowLeft.addEventListener('click', handleLeftClick);
arrowRight.addEventListener('click', handleRightClick);

//DOTS

// Sélectionner le conteneur existant
const dotsContainer = document.querySelector('.dots');

// Créer les points dynamiquement
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot'); // classe de base pour chaque point
    
    // Le premier point est actif
    if (i === 0) {
        dot.classList.add('dot_selected'); // classe pour le point actif
    }
    
    dotsContainer.appendChild(dot);
}