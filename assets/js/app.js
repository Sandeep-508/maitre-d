let menu = document.querySelector(".menubar");
let sm_screen = document.querySelector(".lg_view");
let nav_links = document.querySelectorAll(".nav_link");
let body = document.body;
menu.addEventListener("click", () => {
    body.style.overflow = "hidden";
    sm_screen.classList.toggle("show");
    nav_links.forEach(other => {
        other.addEventListener("click", () => {
            sm_screen.classList.remove("show");
            body.style.overflow = "auto";
        });
    });
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


let btn = document.querySelector(".btn_out");
let moving_btn = document.querySelector(".moving_btn");
btn.addEventListener("click", () => {
    moving_btn.classList.toggle("move");
});

let click_btn = document.querySelectorAll(".click_effect");

click_btn.forEach(element => {
    let icon = element.querySelector(".check_icon");
    let isDisplay = true;
    element.addEventListener("click", () => {
        if (isDisplay) {
            icon.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9644 6.27148L5.67944 11.5564M5.67944 6.27148L10.9644 11.5564" stroke="#979797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.32164 16.2546C12.3755 16.2546 15.6618 12.9683 15.6618 8.91442C15.6618 4.86054 12.3755 1.57422 8.32164 1.57422C4.26776 1.57422 0.981445 4.86054 0.981445 8.91442C0.981445 12.9683 4.26776 16.2546 8.32164 16.2546Z" stroke="#979797" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
            isDisplay = false;
        } else {
            icon.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.3328 1.78426C10.0636 1.5088 9.74211 1.28992 9.38715 1.14048C9.03219 0.991043 8.65093 0.914062 8.2658 0.914062C7.88066 0.914062 7.49941 0.991043 7.14444 1.14048C6.78948 1.28992 6.46797 1.5088 6.1988 1.78426L5.5768 2.42226L4.6868 2.41126C4.30155 2.4067 3.91927 2.47922 3.56246 2.62455C3.20564 2.76988 2.88149 2.98509 2.60906 3.25752C2.33662 3.52995 2.12142 3.8541 1.97608 4.21092C1.83075 4.56773 1.75824 4.95001 1.7628 5.33526L1.7728 6.22526L1.1368 6.84726C0.861337 7.11643 0.642457 7.43794 0.49302 7.79291C0.343582 8.14787 0.266602 8.52912 0.266602 8.91426C0.266602 9.2994 0.343582 9.68065 0.49302 10.0356C0.642457 10.3906 0.861337 10.7121 1.1368 10.9813L1.7738 11.6033L1.7628 12.4933C1.75824 12.8785 1.83075 13.2608 1.97608 13.6176C2.12142 13.9744 2.33662 14.2986 2.60906 14.571C2.88149 14.8434 3.20564 15.0586 3.56246 15.204C3.91927 15.3493 4.30155 15.4218 4.6868 15.4173L5.5768 15.4073L6.1988 16.0433C6.46797 16.3187 6.78948 16.5376 7.14444 16.687C7.49941 16.8365 7.88066 16.9135 8.2658 16.9135C8.65093 16.9135 9.03219 16.8365 9.38715 16.687C9.74211 16.5376 10.0636 16.3187 10.3328 16.0433L10.9548 15.4063L11.8448 15.4173C12.23 15.4218 12.6123 15.3493 12.9691 15.204C13.326 15.0586 13.6501 14.8434 13.9225 14.571C14.195 14.2986 14.4102 13.9744 14.5555 13.6176C14.7008 13.2608 14.7734 12.8785 14.7688 12.4933L14.7588 11.6033L15.3948 10.9813C15.6703 10.7121 15.8891 10.3906 16.0386 10.0356C16.188 9.68065 16.265 9.2994 16.265 8.91426C16.265 8.52912 16.188 8.14787 16.0386 7.79291C15.8891 7.43794 15.6703 7.11643 15.3948 6.84726L14.7578 6.22526L14.7688 5.33526C14.7734 4.95001 14.7008 4.56773 14.5555 4.21092C14.4102 3.8541 14.195 3.52995 13.9225 3.25752C13.6501 2.98509 13.326 2.76988 12.9691 2.62455C12.6123 2.47922 12.23 2.4067 11.8448 2.41126L10.9548 2.42126L10.3328 1.78526V1.78426ZM10.6198 7.76826L7.6198 10.7683C7.57335 10.8148 7.51818 10.8518 7.45743 10.877C7.39669 10.9022 7.33156 10.9152 7.2658 10.9152C7.20003 10.9152 7.13491 10.9022 7.07416 10.877C7.01342 10.8518 6.95824 10.8148 6.9118 10.7683L5.4118 9.26826C5.36531 9.22177 5.32843 9.16658 5.30327 9.10584C5.27811 9.0451 5.26516 8.98 5.26516 8.91426C5.26516 8.84851 5.27811 8.78341 5.30327 8.72267C5.32843 8.66193 5.36531 8.60675 5.4118 8.56026C5.45828 8.51377 5.51347 8.47689 5.57421 8.45173C5.63495 8.42658 5.70005 8.41363 5.7658 8.41363C5.83154 8.41363 5.89664 8.42658 5.95738 8.45173C6.01812 8.47689 6.07331 8.51377 6.1198 8.56026L7.2658 9.70726L9.9118 7.06026C10.0057 6.96637 10.133 6.91363 10.2658 6.91363C10.3986 6.91363 10.5259 6.96637 10.6198 7.06026C10.7137 7.15414 10.7664 7.28148 10.7664 7.41426C10.7664 7.54703 10.7137 7.67437 10.6198 7.76826Z"
                                                fill="#753A96" />
                                            <path
                                                d="M10.3328 1.78426C10.0636 1.5088 9.74211 1.28992 9.38715 1.14048C9.03219 0.991043 8.65093 0.914062 8.2658 0.914062C7.88066 0.914062 7.49941 0.991043 7.14444 1.14048C6.78948 1.28992 6.46797 1.5088 6.1988 1.78426L5.5768 2.42226L4.6868 2.41126C4.30155 2.4067 3.91927 2.47922 3.56246 2.62455C3.20564 2.76988 2.88149 2.98509 2.60906 3.25752C2.33662 3.52995 2.12142 3.8541 1.97608 4.21092C1.83075 4.56773 1.75824 4.95001 1.7628 5.33526L1.7728 6.22526L1.1368 6.84726C0.861337 7.11643 0.642457 7.43794 0.49302 7.79291C0.343582 8.14787 0.266602 8.52912 0.266602 8.91426C0.266602 9.2994 0.343582 9.68065 0.49302 10.0356C0.642457 10.3906 0.861337 10.7121 1.1368 10.9813L1.7738 11.6033L1.7628 12.4933C1.75824 12.8785 1.83075 13.2608 1.97608 13.6176C2.12142 13.9744 2.33662 14.2986 2.60906 14.571C2.88149 14.8434 3.20564 15.0586 3.56246 15.204C3.91927 15.3493 4.30155 15.4218 4.6868 15.4173L5.5768 15.4073L6.1988 16.0433C6.46797 16.3187 6.78948 16.5376 7.14444 16.687C7.49941 16.8365 7.88066 16.9135 8.2658 16.9135C8.65093 16.9135 9.03219 16.8365 9.38715 16.687C9.74211 16.5376 10.0636 16.3187 10.3328 16.0433L10.9548 15.4063L11.8448 15.4173C12.23 15.4218 12.6123 15.3493 12.9691 15.204C13.326 15.0586 13.6501 14.8434 13.9225 14.571C14.195 14.2986 14.4102 13.9744 14.5555 13.6176C14.7008 13.2608 14.7734 12.8785 14.7688 12.4933L14.7588 11.6033L15.3948 10.9813C15.6703 10.7121 15.8891 10.3906 16.0386 10.0356C16.188 9.68065 16.265 9.2994 16.265 8.91426C16.265 8.52912 16.188 8.14787 16.0386 7.79291C15.8891 7.43794 15.6703 7.11643 15.3948 6.84726L14.7578 6.22526L14.7688 5.33526C14.7734 4.95001 14.7008 4.56773 14.5555 4.21092C14.4102 3.8541 14.195 3.52995 13.9225 3.25752C13.6501 2.98509 13.326 2.76988 12.9691 2.62455C12.6123 2.47922 12.23 2.4067 11.8448 2.41126L10.9548 2.42126L10.3328 1.78526V1.78426ZM10.6198 7.76826L7.6198 10.7683C7.57335 10.8148 7.51818 10.8518 7.45743 10.877C7.39669 10.9022 7.33156 10.9152 7.2658 10.9152C7.20003 10.9152 7.13491 10.9022 7.07416 10.877C7.01342 10.8518 6.95824 10.8148 6.9118 10.7683L5.4118 9.26826C5.36531 9.22177 5.32843 9.16658 5.30327 9.10584C5.27811 9.0451 5.26516 8.98 5.26516 8.91426C5.26516 8.84851 5.27811 8.78341 5.30327 8.72267C5.32843 8.66193 5.36531 8.60675 5.4118 8.56026C5.45828 8.51377 5.51347 8.47689 5.57421 8.45173C5.63495 8.42658 5.70005 8.41363 5.7658 8.41363C5.83154 8.41363 5.89664 8.42658 5.95738 8.45173C6.01812 8.47689 6.07331 8.51377 6.1198 8.56026L7.2658 9.70726L9.9118 7.06026C10.0057 6.96637 10.133 6.91363 10.2658 6.91363C10.3986 6.91363 10.5259 6.96637 10.6198 7.06026C10.7137 7.15414 10.7664 7.28148 10.7664 7.41426C10.7664 7.54703 10.7137 7.67437 10.6198 7.76826Z"
                                                fill="url(#paint0_linear_34717_12754)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_34717_12754" x1="2.69189"
                                                    y1="0.914062" x2="15.6291" y2="2.42084"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FD9B2B" />
                                                    <stop offset="1" stop-color="#F14F09" />
                                                </linearGradient>
                                            </defs>
                                        </svg>`;
            isDisplay = true;
        }
    });
});

let scroll_top = document.querySelector(".scroll_to_top");
let scrollPt = 200;
window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPt) {
        scroll_top.style.display = "flex";
    } else {
        scroll_top.style.display = "none";
    }
    scroll_top.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

gsap.from(".scroll_to_top", {
    y: 20,
    yoyo: true,
    repeat: -1,
    // duration: 0.75,
})