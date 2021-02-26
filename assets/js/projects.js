// globally instantiated variables/objects
const classAndFreelanceProjects = {
  ttfm: {
    fullTitle: "Test This For Me",
    avatarPic: "assets/images/IconsAndLogos/ttfm-logo-clr1.svg",
    shortDesc: "Group Project For Class",
    longDesc: "Lorem Ipsum dolor, sit amet consectetur",
    chipsArray: ["MySQL", "Sequelize", "OAuth.io"],
    sourceLink: "https://github.com/TyPhyter/TestThisFor.Me",
    deployedLink: "http://www.testthisfor.me"
  },
  yeet: {
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
const makeProjectAvatars = classAndFreelanceProjects => {
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

htmlProjectList.addEventListener("click", event => {
  const selectedProject = event.target.closest("li");
  const bigCardProp = classAndFreelanceProjects[selectedProject.getAttribute("data-project")];

  const projectCardDisplayInnards =
    `<span class="card-title" id="projectTitle">${bigCardProp.fullTitle}</span>
    <p>
      ${bigCardProp.longDesc}
    </p>
    <hr>
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
    </div>`

  document.getElementById("cardInnardsHere").innerHTML = projectCardDisplayInnards
})



// on page load
makeProjectAvatars(classAndFreelanceProjects);