// globally instantiated variables/objects
const classAndFreelanceProjects = {
  ttfm: {
    id: "ttfm",
    fullTitle: "Test This For Me",
    avatarPic: "assets/images/IconsAndLogos/ttfm-logo-clr1.svg",
    shortDesc: "Group Project For Class",
    longDesc: "Lorem Ipsum dolor, sit amet consectetur",
    chipsArray: ["MySQL", "Sequelize", "OAuth.io"],
    sourceLink: "https://github.com/TyPhyter/TestThisFor.Me",
    deployedLink: "http://www.testthisfor.me"
  },
  yeet: {
    id: "yeet",
    fullTitle: "Something else",
    avatarPic: "assets/images/IconsAndLogos/ttfm-logo-clr1.svg",
    shortDesc: "Group Project For Class",
    longDesc: "Lorem Ipsum dolor, sit amet consectetur",
    chipsArray: ["MySQL", "Sequelize", "OAuth.io"],
    sourceLink: "https://github.com/TyPhyter/TestThisFor.Me",
    deployedLink: "http://www.testthisfor.me"
  }
}

const htmlProjectList = document.getElementById("dynamicProjects");



//functions
const makeProjectAvatars = (classAndFreelanceProjects) => {
  for (const prop in classAndFreelanceProjects) {
    const loopProp = classAndFreelanceProjects[prop];
  
    const avatarListItem =
      `<li class="collection-item avatar" data-project="${prop}">
      <img src="${loopProp.avatarPic}" alt="test this for me logo" class="circle">
      <span class="title">${loopProp.fullTitle}</span>
      <p>${loopProp.shortDesc}</p>
      </li>`

    htmlProjectList.innerHTML += avatarListItem;
  }
};

htmlProjectList.addEventListener("click", function (event) {
  const selectedProject = event.target.closest("li");
  for (const prop in classAndFreelanceProjects) {
    const bigCardLoop = classAndFreelanceProjects[prop];
    if (selectedProject.getAttribute("data-project") === classAndFreelanceProjects[prop].id) {
      const projectCardDisplayInnards = 
      `
        <span class="card-title" id="projectTitle">${bigCardLoop.fullTitle}</span>
        <p id="projectSummary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda pariatur sapiente labore ipsa
          dolorem illum repellendus totam nulla quod soluta commodi nostrum qui odit dolore, dolorum, sed voluptas
          consequuntur repudiandae.
        </p>
        <hr>
        <div id="chipContainer">
          <div class="chip">MySQL</div>
          <div class="chip">Sequelize</div>
          <div class="chip">Handlebars.js</div>
          <div class="chip">Materialize CSS</div>
          <div class="chip">OAuth.io</div>
          <div class="card-action">
            <p class="left"><a href="http://www.testthisfor.me" target="_blank" id="viewSiteLink">View Site</a>
            </p>
            <p class="left"><a href="https://github.com/TyPhyter/TestThisFor.Me" target="_blank"
                id="viewSourceLink">View Source</a>
            </p>
          </div>
        </div>`

    document.getElementById("cardInnardsHere").innerHTML = projectCardDisplayInnards
    }
  }
})



// on page load
makeProjectAvatars(classAndFreelanceProjects);