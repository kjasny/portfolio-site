const webDevProjectsArray = [
    {
    Description: "Portfolio Site: This site was created using my newly developed skills in HTML, CSS, and Javascript. Hopefully this site will give you a great depiction of what I am capable of with just a few weeks of training under my belt.",
}, 
{
    Description: "More to come!",
}
];
const projectBtn = document.getElementById("projectButton")
let currentIndex = 0


function displayProject() {
    if(currentIndex === webDevProjectsArray.length-1){
        currentIndex = 0 
    }else currentIndex++
    const currentProjectEl = document.getElementById("currentProject")
    const project = webDevProjectsArray[currentIndex]

    currentProjectEl.textContent = project.Description
    
}

projectBtn.addEventListener("click", displayProject)


