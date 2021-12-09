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

    //Mouseover image effect on index page
    document.querySelectorAll(".article-img").forEach(function (img) {
      img.addEventListener("mouseover", function () {
        this.style.transition = "opacity 1s";
        this.style.transition = "transform 1s ease";
        this.style.opacity = "1";
        this.style.transform = "scale(1.05)";
        
        console.log("Image opacity to '1'");
      });
    });
    document.querySelectorAll(".article-img").forEach(function (img) {
        img.addEventListener("mouseout", function () {
            this.style.transition = "opacity 1s";
            this.style.transition = "transform 1s ease";
            this.style.opacity = ".9";
            this.style.transform = "scale(1)";
          console.log("Image opacity to '.9'");
        });
      });
      document.querySelectorAll(".article-stmts").forEach(function (img) {
        img.addEventListener("mouseover", function (e) {
          e.target.style.transition = "opacity 1s";
          e.target.style.opacity = "1";
          
          console.log("Image opacity to '1'");
        });
      });
      document.querySelectorAll(".article-stmts").forEach(function (img) {
          img.addEventListener("mouseout", function () {
              this.style.transition = "opacity 1s";
              this.style.opacity = ".9";
            console.log("Image opacity to '.9'");
          });
        });


    // Prevent null error on page other than home page
    if (document.querySelector("#info-grid-container")) {
        // Show hide button link to other pages from articles
    document.querySelector("#article1-stmt").addEventListener("mouseover", function () {
        document.querySelector("#article1-link").style.transition = "opacity 1s";
        document.querySelector("#article1-link").style.opacity = "1";
    });
    document.querySelector("#article1-stmt").addEventListener("mouseout", function () {
        document.querySelector("#article1-link").style.transition = "opacity 1s";
        document.querySelector("#article1-link").style.opacity = "0";
    });
    document.querySelector("#prog-tease").addEventListener("mouseover", function () {
        document.querySelector("#article2-link").style.transition = "opacity 1s";
        document.querySelector("#article2-link").style.opacity = "1";
    });
    document.querySelector("#prog-tease").addEventListener("mouseout", function () {
        document.querySelector("#article2-link").style.transition = "opacity 1s";
        document.querySelector("#article2-link").style.opacity = "0";
    });
    document.querySelector("#farm-tease").addEventListener("mouseover", function () {
        document.querySelector("#article3-link").style.transition = "opacity 1s";
        document.querySelector("#article3-link").style.opacity = "1";
    });
    document.querySelector("#farm-tease").addEventListener("mouseout", function () {
        document.querySelector("#article3-link").style.transition = "opacity 1s";
        document.querySelector("#article3-link").style.opacity = "0";
        console.log("Mouse out");
    });
    }
      

    console.log("DOM Content loaded and parsed")
});