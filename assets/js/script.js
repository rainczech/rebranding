let lastKnownScrollPosition = 0;
const navBar = document.getElementById("switchableNavBar");

document.addEventListener("scroll", () => {
  let newScrollPosition = window.scrollY;
  if(newScrollPosition < lastKnownScrollPosition){
    navBar.style.top = "0";
    navBar.style.transition = "all 1s";
    lastKnownScrollPosition = newScrollPosition;      
  } else {
    navBar.style.top = "-100px";
    navBar.style.transition = "all 1s";
    lastKnownScrollPosition = newScrollPosition;
  };
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    hoverEnabled: false
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});

document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


const imageInfoDisplay = (event) =>{
  let image = event.target;
  let text = event.target.nextElementSibling
  image.style.opacity = 0.4;
  text.style.opacity = 1
  image.style.transition = "all 1s";
  text.style.transition = "all 1s";

}

const imageInfoHide = (event) => {
  let image = event.target;
  let text = event.target.nextElementSibling
  image.style.opacity = 1;
  text.style.opacity = 0;
  image.style.transition = "all 1s";
  text.style.transition = "all 1s";
}