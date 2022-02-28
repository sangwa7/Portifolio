function myFunction() {
    var elements = document.getElementsByClassName('mobile-menu');
    Array.from(elements).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "none";
            x.style.transition = "0.5s ease-in"
          } else {
            x.style.display = "block";
          }
    })
 }
