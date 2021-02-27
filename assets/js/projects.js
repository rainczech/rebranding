// globally instantiated variables/objects
const htmlProjectList = document.getElementById("dynamicProjects");
const projectHolder = document.getElementById("cardInnardsHere")

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

// on page load
makeProjectAvatars(classAndFreelanceProjects);