function toggler() {
    const icon = document.querySelector('#toggler')
    const menu = document.querySelector('.menu')

    if (icon.innerHTML == "menu") {
        icon.innerHTML = "close";
        menu.style.display = "block";
    }
    else {
        icon.innerHTML = "menu";
        menu.style.display = "none";
    }
}

(function () {
    emailjs.init({publicKey:"pMGO4WsZGDf2zAamU"}); // Remplacez par votre User ID
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault(); // Empêche le formulaire de recharger la page

	// Récupère les données du formulaire
	const name = document.getElementById("name").value;
	const email = document.getElementById("mail").value;
	const message = document.getElementById("msg").value;
    const business = document.getElementById("business").value;
    const phone = document.getElementById("phone_number").value;

	// Préparer les paramètres pour EmailJS
	// On récupère les valeurs des input dans un objet
	// Adaptez à vos propres champs de texte
	const templateParams = {
		name: name,
		email: email,
		message: message,
        business: business,
        phone: phone,
	};

    console.log(name);
    console.log(email);
    console.log(message);
    console.log(business);
    console.log(phone_number);
    
	// Envoyer l'email via EmailJS
	emailjs.send("service_0zbnmvl", "template_2xfsntk", templateParams).then(
		function (response) {
			alert("Message envoyé avec succès !");
		},
		function (error) {
			alert("Erreur lors de l'envoi du message : " + error.text);
		},
	);

	// Réinitialise le formulaire après l'envoi
	document.getElementById("contactForm").reset();
});



const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

// Ajuster la taille du canvas à la taille de la fenêtre
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16; // Taille des caractères
const columns = Math.floor(canvas.width / fontSize); // Nombre de colonnes sur l'écran
const drops = Array.from({ length: columns }, () => 1); // Initialisation des gouttes

const matrixText = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Ensemble de caractères

// Fonction de rendu de l'effet Matrix
function drawMatrix() {
// Réglage de la transparence pour l'effet de traînée
context.fillStyle = 'rgba(0, 0, 0, 0.05)';
context.fillRect(0, 0, canvas.width, canvas.height);

// Couleur du texte
context.fillStyle = '#00C8FF';
context.font = `${fontSize}px monospace`;

const scrollY = window.scrollY;

// Boucle à travers les colonnes
for (let i = 0; i < drops.length; i++) {
// Choisir un caractère au hasard dans la chaîne de texte Matrix
const text = matrixText.charAt(Math.floor(Math.random() * matrixText.length));

// Dessiner le caractère à la position de la colonne et de la ligne actuelle
context.fillText(text, i * fontSize, drops[i] * fontSize - scrollY);

// Réinitialiser la goutte pour qu'elle recommence en haut si elle atteint la fin de l'écran
if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
drops[i] = 0;
}

// Déplacer la goutte vers le bas
drops[i]++;
}

// Appeler drawMatrix à nouveau au prochain rafraîchissement de l'écran
requestAnimationFrame(drawMatrix);
}

// Dessiner le texte de Matrix à la première fois
drawMatrix();

function adjustCanvasSize() {
canvas.width = window.innerWidth;
// Ajuster à la hauteur de la page entière (pas juste la fenêtre visible)
canvas.height = document.documentElement.scrollHeight;

// Recalculer le nombre de colonnes
const columns = Math.floor(canvas.width / fontSize);
drops.length = columns; // Ajuster la longueur de drops
drops.fill(1); // Remplir avec des valeurs initiales
}

// Appeler la fonction pour ajuster la taille du canvas au chargement
adjustCanvasSize();

// Recalculer la taille à chaque redimensionnement de la fenêtre
window.addEventListener('resize', adjustCanvasSize);


const imageElement = document.getElementById('image-pc');

const imageBase = "img/PC-ETEINS-ETAPE-1-OK.png"; // Image de base
const imageHover = "img/PC-ALLUMER-ETAPE-2-OK.png"; // Image au survol
const imageClick = "img/test5.png"; // Image après clic

// Créer un nouvel élément img pour afficher la troisième image centrée
const centeredImage = document.createElement("img");
centeredImage.id = "centered-image";
document.body.appendChild(centeredImage); // Ajoute l'image masquée par défaut

// Changement d'image au survol
imageElement.addEventListener("mouseover", () => {
imageElement.src = imageHover;
});

// Retour à l'image de base après le survol
imageElement.addEventListener("mouseout", () => {
imageElement.src = imageBase;
});

// Afficher la troisième image centrée au clic et masquer la première image
imageElement.addEventListener("click", () => {
centeredImage.src = imageClick; // Définit le src au moment du clic
centeredImage.style.display = "block"; // Affiche l'image centrée
imageElement.style.visibility = "hidden"; // Masque la première image
});

// Cacher la troisième image et réafficher la première lorsque la souris sort de l'image centrée
centeredImage.addEventListener("mouseleave", () => {
centeredImage.style.display = "none"; // Masque l'image centrée
centeredImage.src = ""; // Supprime le src pour éviter de l'afficher au chargement
imageElement.style.visibility = "visible"; // Réaffiche la première image
});