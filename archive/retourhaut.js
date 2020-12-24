document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function (ev) {
        document.getElementById("Haut_page").className = (window.pageYOffset > 100) ? "visible" :
            "invisible";
    };
});