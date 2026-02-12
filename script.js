function addProject() {
    let title = document.getElementById("projectTitle").value;
    let desc = document.getElementById("projectDesc").value;

    if (title === "" || desc === "") {
        alert("Please fill all fields");
        return;
    }

    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <button onclick="deleteProject(this)">Delete</button>
    `;

    document.getElementById("projectList").appendChild(projectDiv);

    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDesc").value = "";
}

function deleteProject(button) {
    button.parentElement.remove();

}
