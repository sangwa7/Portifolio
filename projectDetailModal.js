function projectDetail() {
    var elements = document.getElementsByClassName('project-detail');
    Array.from(elements).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
    })
    console.log("See project clicked");
  }