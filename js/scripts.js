window.addEventListener("DOMContentLoaded", function () {


    // Navbar appearance
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

    //Mouseover image effect
    document.querySelectorAll(".article-img").forEach(function (img) {
      img.addEventListener("mouseover", function () {
        this.style.opacity = "1";
        console.log("Image opacity to '1'");
      });
    });

    document.querySelectorAll(".article-img").forEach(function (img) {
        img.addEventListener("mouseout", function () {
          this.style.opacity = ".9";
          console.log("Image opacity to '.9'");
        });
      });

    console.log("DOM Content loaded and parsed")
});