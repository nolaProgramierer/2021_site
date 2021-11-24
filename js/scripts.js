window.addEventListener("DOMContentLoaded", function () {

    let navbar = document.querySelector(".nav-wrapper");
    // return original scrollY value
    let scroll = window.scrollY;
    let navHeight = navbar.clientHeight;
    
    window.addEventListener("scroll", function () {
        let scrolled = window.scrollY;
        // animate navbar off screen when scrollY exceeds navbar height
        if (scrolled > navHeight) {
            navbar.classList.add("animate");
        } else {
            navbar.classList.remove("animate");
        }
        // when y offset is greater than original scroll position
        // remove sticky navbar
        if (scrolled > scroll) {
            navbar.classList.remove("sticky");
        } else {
            navbar.classList.add("sticky");
        }
        // on each scroll event reset beginning scroll position to current y offset
        scroll = scrolled;
    });
    console.log("DOM Content loaded and parsed")
});