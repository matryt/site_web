document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function (ev) {
        document.getElementById("Haut_page").className = (window.pageYOffset > 100) ? "visible" :
            "invisible";
    };
});

var today = new Date();
var annee = today.getFullYear();
var sannee = document.getElementById('annee');
sannee.innerHTML = annee;
