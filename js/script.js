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




