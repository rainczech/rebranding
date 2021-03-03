let lastKnownScrollPosition = 0;
const navBar = document.getElementById("switchableNavBar");

document.addEventListener("scroll", () => {
  let newScrollPosition = window.scrollY;
  if(newScrollPosition < lastKnownScrollPosition){
    navBar.style.top = "0";
    lastKnownScrollPosition = newScrollPosition;      
  } else {
    navBar.style.top = "-100px";
    lastKnownScrollPosition = newScrollPosition;
  };
});
