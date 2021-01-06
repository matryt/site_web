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
