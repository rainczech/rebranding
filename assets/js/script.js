function hamburgerToggle() {
  var x = document.getElementById("headerLinksBucket");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}