let menu = document.querySelector(".menubar");
let sm_screen = document.querySelector(".lg_view");
let body = document.body;
menu.addEventListener("click", () => {
    body.style.overflow = "hidden";
    sm_screen.classList.toggle("show");
    if (sm_screen.classList.contains("show")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
});

gsap.from(".orange_box", {
    x: -1320,
    repeat: -1,
    yoyo: true,
    duration: 6,
    ease: "none",
});
gsap.from(".spring", {
    rotate: 360,
    repeat: -1,
    // yoyo: true,
    duration: 6,
    ease: "none",
});


