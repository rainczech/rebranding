// globally instantiated variables/objects
const htmlProjectList = document.getElementById("dynamicProjects");
const projectHolder = document.getElementById("cardInnardsHere");
const DGCProjectsList = document.getElementById("DGCProjects");
const DGCProjectCardHolder = document.getElementById("turtleCardInnardsHere");
navBar = document.getElementById("switchableNavBar");
let lastKnownScrollPosition = 0;


const classAndFreelanceProjects = {
  ttfm: {
    fullTitle: "TestThisFor.Me",
    avatarPic: "assets/images/IconsAndLogos/ttfm-logo-clr1.svg",
    shortDesc: "Group Project For Class",
    longDesc: "A collaborative project where a peer based review system for web developers was created. <br><br> This project fills a need for developers who need other developers to test their complete projects or blocks of code to find any unknown bugs or test edge cases.",
    chipsArray: ["MySQL", "Sequelize", "Materialize CSS", "Handlebars.js", "OAuth.io"],
    sourceLink: "https://github.com/rainczech/TestThisFor.Me",
    deployedLink: "http://www.testthisfor.me"
  },
  thb: {
    fullTitle: "The Honorary Bridesmaid",
    avatarPic: "./assets/images/IconsAndLogos/TheHonoraryBridesmaid-Logo-CMYK.png",
    shortDesc: "Freelance Project",
    longDesc: "A static website I made for a client fo rher wedding service business that is mobile reponsive",
    chipsArray: ["Materialize CSS", "FormSpree", "LightWidget"],
    sourceLink: "https://github.com/rainczech/THB",
    deployedLink: "http://thehonorarybridesmaid.com"
  },
  ttfmMern: {
    fullTitle: "TestThisFor.Me v 2.0",
    avatarPic: "assets/images/IconsAndLogos/ttfm-logo-clr1.svg",
    shortDesc: "Group Project For Class",
    longDesc: "<blockquote>A collaborative project where a peer based review system for web developers was created. <br><br> This project fills a need for developers who need other developers to test their complete projects or blocks of code to find any unknown bugs or test edge cases.</blockquote><p>Version 2.0 is a refactoring of the TestThisFor.Me into the full MERN stack.  <br><br>Handlebars, SQL, and Sequelize were removed and replaced with React.js, MongoDB, and Mongoose. Whereas a Chrome extention with screenshot capcity and gamification with badges were added as well.</p>",
    chipsArray: ["MongoDB", "Mongoose", "Node.js", "OAuth.io", "React.js"],
    sourceLink: "https://github.com/rainczech/ttfm-mern",
    deployedLink: "http://www.testthisfor.me"
  }
}

const dallasGiveCampProjects ={
  dgcbtp: {
    fullTitle: "The Bermuda Turtle Project",
    avatarPic: "./assets/images/IconsAndLogos/BTP_icon.jpg",
    shortDesc: "Sea Turtle Conservancy 2018",
    longDesc: "Updated the entire site for the Bermuda Turtle Part, part of the Sea Turtle Conservancy. The design, structure, and placement was all redone by myself.<br><br>WordPress was used so non-developers can update the information as necessary independently.",
    chipsArray: ["HTML", "CSS", "WordPress"],
    sourceLink: "https://dallasgivecamp.org/",
    deployedLink: "http://bermudaturtleproject.org/"
  },
  dgctdt: {
    fullTitle: "Tour De Turtles",
    avatarPic: ".assets\images\IconsAndLogos\TourDeTurtles.PNG",
    shortDesc: "Sea Turtle Conservancy 2018",
    longDesc: "Updated the site for the Tour De Turtles, part of the Sea Turtle Conservancy. I was responsible for the layout and transferring of content from the older site to this new one.<br><br>WordPress was used so non-developers can update the information as necessary independently.",
    chipsArray: ["HTML", "CSS", "WordPress"],
    sourceLink: "https://dallasgivecamp.org/",
    deployedLink: "https://tourdeturtles.org/"
  }
}

//functions
const makeProjectAvatars = classAndFreelanceProjects => {
  let intervalCounter = 0;
  for (const prop in classAndFreelanceProjects) {
    const loopProp = classAndFreelanceProjects[prop];
    const avatarListItem =
      `<li class="waves-effect waves-orange collection-item avatar animate__animated animate__fadeInLeft animate__delay-${intervalCounter}s" data-project="${prop}">      
      <img src="${loopProp.avatarPic}" alt="test this for me logo" class="circle">
      <span class="title">${loopProp.fullTitle}</span>
      <p>${loopProp.shortDesc}</p>      
      </li>`
    htmlProjectList.innerHTML += avatarListItem;
    intervalCounter++;
  }
};

htmlProjectList.addEventListener("click", event => {
  const selectedProject = event.target.closest("li");
  const bigCardProp = classAndFreelanceProjects[selectedProject.getAttribute("data-project")];
  const projectCardDisplayInnards =
    `<div class="card-content animate__animated animate__fadeIn">
    <span class="card-title" id="projectTitle">${bigCardProp.fullTitle}</span>
    <p>
      ${bigCardProp.longDesc}
    </p>
    <hr>
    <label>Technologies Used:</label>
    <div>    
      ${bigCardProp.chipsArray.map(chipText => `<div class="chip">${chipText}</div>`).join("")}
      <div class="card-action">
        <p class="left">
          <a href="${bigCardProp.deployedLink}" target="_blank">View Site</a>
        </p>
        <p class="left">
          <a href="${bigCardProp.sourceLink}" target="_blank">View Source</a>
        </p>
      </div>
    </div>
    </div>`

  projectHolder.innerHTML = projectCardDisplayInnards; 
})

DGCProjectsList.addEventListener("click", event => {
  const selectedDGCProject = event.target.closest("li");
  const bigDGCProp = objdallasGiveCampProjectsect[selectedDGCProject.getAttribute("data-project")];
  const DGCCardDisplayInnard = 
    `<div class="card-content animate__animated animate__fadeIn">
    <span class="card-title" id="projectTitle">${bigDGCProp.fullTitle}</span>
    <p>
      ${bigDGCProp.longDesc}
    </p>
    <hr>
    <label>Technologies Used:</label>
    <div>    
      ${bigDGCProp.chipsArray.map(chipText => `<div class="chip">${chipText}</div>`).join("")}
      <div class="card-action">
        <p class="left">
          <a href="${bigDGCProp.deployedLink}" target="_blank">View Site</a>
        </p>
        <p class="left">
          <a href="${bigDGCProp.sourceLink}" target="_blank">Dallas Give Camp Site</a>
        </p>
      </div>
    </div>
    </div>`

// event listeners
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: true
  });
});

document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

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


// on page load
makeProjectAvatars(classAndFreelanceProjects);