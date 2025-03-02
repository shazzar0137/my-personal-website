function showAlert(projectName) {
    alert("You clicked on " + projectName);
}

function highlightProject(element) {
    element.style.backgroundColor = "rgba(100, 100, 100, 0.9)";
    element.style.transform = "scale(1.05)";
}

function removeHighlight(element) {
    element.style.backgroundColor = "rgba(51, 51, 51, 0.85)";
    element.style.transform = "scale(1)";
}
