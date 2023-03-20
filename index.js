const navburger = document.getElementById("nav-burger");
const navlist = document.getElementById("navlist");
const linkHome = document.getElementById("link-home");
const linkDestination = document.getElementById("link-destination");
const main = document.getElementById("main")
// navburger.addEventListener("click", function () {
//     navburger.style.display = "none";
//     navlist.style.display = "grid";
// })

linkDestination.addEventListener("click", function () {
    main.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg')";
})

linkHome.addEventListener("click", function () {
    main.style.backgroundImage = "url('assets/home/background-home-desktop.jpg')";
})
