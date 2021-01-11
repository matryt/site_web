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

setTimeout(info, 2000)

function info() {
    alert(
        "Pour consulter la définition d'un terme que vous ne comprendriez pas et qui est en vert, veuillez cliquer sur le terme en question." )
}

function langagemachine () {
    alert("Le langage machine, ou code machine, est la suite de bits qui est interprétée par le processeur d'un ordinateur exécutant un programme informatique. C'est le langage natif d'un processeur, c'est-à-dire le seul qu'il puisse traiter. Il est composé d'instructions et de données à traiter codées en binaire.");
    return False;
}

function veriftype() {
    alert("Le contrôle de type vérifie qu'une opération apparaissant dans une instruction porte bien sur des valeurs adéquates.");
    return False;
}

