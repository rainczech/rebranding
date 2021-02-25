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
  }
}

const htmlProjectList = document.getElementById("dynamicProjects");



//functions
const makeProjectAvatars = (classAndFreelanceProjects) => {
  for (const prop in classAndFreelanceProjects) {
      const avatarListItem =
        `<li class="collection-item avatar id="${prop}">
        <img src="${classAndFreelanceProjects[prop].avatarPic}" alt="test this for me logo" class="circle">
        <span class="title">${classAndFreelanceProjects[prop].fullTitle}</span>
        <p>${classAndFreelanceProjects[prop].shortDesc}</p>
        </li>`

      htmlProjectList.innerHTML+= avatarListItem;
    }

  };

htmlProjectList.addEventListener("click", function(event,classAndFreelanceProjects){
  console.log(this.children[0].getAttribute('id'));
  for (const prop in classAndFreelanceProjects) {
    if(this === classAndFreelanceProjects[prop]){
      console.log("you made it this far")
    }
  }
})




// on page load
makeProjectAvatars(classAndFreelanceProjects);