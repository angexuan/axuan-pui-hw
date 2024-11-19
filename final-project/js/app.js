const wontonsThumbnail = document.querySelector("#wontons img");
wontonsThumbnail.addEventListener("mouseover", function () {
  this.src = "images/wontons-hover.png";
});
wontonsThumbnail.addEventListener("mouseout", function () {
  this.src = "images/wontons.png"; // Reset background color
});
