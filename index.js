var typed = new Typed(".role",{
    strings:["Frontend Developer","Backend Developer","Java Developer"],
    typeSpeed:50,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
