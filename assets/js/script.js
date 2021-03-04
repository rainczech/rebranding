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
