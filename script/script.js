document.addEventListener("DOMContentLoaded", function () {
	window.onscroll = function (ev) {
		document.getElementById("Haut_page").className =
			window.pageYOffset > 100 ? "visible" : "invisible";
	};
});

var today = new Date();
var annee = today.getFullYear();
var sannee = document.getElementById("annee");
sannee.innerHTML = annee;

setTimeout(info, 2000);

function info() {
	alert(
		"Pour consulter la définition d'un terme que vous ne comprendriez pas et qui est en vert, veuillez cliquer sur le terme en question."
	);
}

function explication(numero) {
	switch (numero) {
		case 1:
			alert(
				"Le langage machine, ou code machine, est la suite de bits qui est interprétée par le processeur d'un ordinateur exécutant un programme informatique. C'est le langage natif d'un processeur, c'est-à-dire le seul qu'il puisse traiter. Il est composé d'instructions et de données à traiter codées en binaire."
			);
			return False;
		case 2:
			alert(
				"Le contrôle de type vérifie qu'une opération apparaissant dans une instruction porte bien sur des valeurs adéquates."
			);
			return False;
		case 3:
			alert(
				"Exception levée lorsqu'une opération ou fonction est appliquée à un objet d'un type inapproprié. La valeur associée est une chaîne de caractères donnant des détails sur le type d'inadéquation."
			);
			return False;
		case 4:
			alert(
				"Un système d'exploitation est un ensemble de programmes qui dirige l'utilisation des ressources d'un ordinateur par des logiciels applicatifs."
			);
			return False;
		case 5:
			alert(
				"Usenet est un ensemble de protocoles servant à générer, stocker et récupérer des articles (qui ressemblent de très près à des courriels) et permet l'échange de ceux-ci entre les membres d'une communauté."
			);
			return False;
		case 6:
			alert(
				"Un terminal est une interface en ligne de commande qui occupe tout l'écran et est l'interface homme-machine par défaut du système d'exploitation."
			);
			return False;
		case 7:
			alert(
				"Une bibliothèque standard est une bibliothèque logicielle qui peut être utilisée dans toute implémentation du langage."
			);
			return False;
		case 8:
			alert(
				"L'adresse mémoire est un nombre entier naturel qui désigne une zone particulière de la mémoire."
			);
			return False;
		case 9:
			alert(
				"Un processeur est un composant d'un ordinateur qui exécute les instructions et traite les données des programmes"
			);
			return False;
		default:
			alert("Un argument incorrect a été fourni à la fonction.");
			return False;
	}
}
