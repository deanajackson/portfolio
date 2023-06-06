const projectsDiv = document.getElementById("projects");

function clearAndReset() {
  let projectContainer = document.getElementById("projectContainer");
  projectContainer.remove();
  projectContainer = document.createElement("div");
  projectContainer.id = "projectContainer";
  projectsDiv.appendChild(projectContainer);
}

function PENGenerate() {
  clearAndReset();
  let container = document.getElementById("projectContainer");

  let projectPic = document.createElement("img");
  let title = document.createElement("h3");
  let subtitle = document.createElement("p");
  let githubButton = document.createElement("button");
  let siteButton = document.createElement("button");

  projectPic.src = "newpen.png";
  projectPic.alt = "Screenshot of the Portland ESL Network Website";
  title.textContent = "Portland ESL Network Website";
  subtitle.textContent = "Volunteer website development using WordPress";
  githubButton.textContent = "GitHub Repo";
  githubButton.onclick = "https://github.com/stephr3/portland-esl-network";
  siteButton.textContent = "Live Site";
  siteButton.onclick = "https://portlandesl.com/";

  container.append(projectPic);
  container.append(title);
  container.append(subtitle);
  container.append(githubButton);
  container.append(siteButton);
}
function GermanGenerate() {
  clearAndReset();
  let container = document.getElementById("projectContainer");

  let projectPic = document.createElement("img");
  let title = document.createElement("h3");
  let subtitle = document.createElement("p");
  let githubButton = document.createElement("button");
  let siteButton = document.createElement("button");

  projectPic.src = "levelupgerman.png";
  projectPic.alt = "Screenshot of the Level Up German Website Homepage";
  title.textContent = "Level Up German";
  subtitle.textContent = "Volunteer website development using WordPress";
  githubButton.textContent = "GitHub Repo";
  githubButton.onclick =
    "http://deanajackson.webhostingforstudents.com/level-up-german/index.html";
  siteButton.textContent = "Live Site";
  siteButton.onclick = "https://github.com/deanajackson/germansite";

  container.append(projectPic);
  container.append(title);
  container.append(subtitle);
  container.append(githubButton);
  container.append(siteButton);
}
function MacawGenerate() {
  clearAndReset();
  let container = document.getElementById("projectContainer");

  let projectPic = document.createElement("img");
  let title = document.createElement("h3");
  let subtitle = document.createElement("p");
  let githubButton = document.createElement("button");
  let siteButton = document.createElement("button");

  projectPic.src = "macaws.png";
  projectPic.alt = "Screenshot of Hyacynth Macaw Website homepage";
  title.textContent = "Hyacynth Macaw - Project Intermediate CSS class";
  subtitle.textContent =
    "This was a project for an intermediate CSS class I took at PCC";
  githubButton.textContent = "GitHub Repo";
  githubButton.onclick = "https://github.com/deanajackson/macaws";
  siteButton.textContent = "Live Site";
  siteButton.onclick = "http://deanajackson.webhostingforstudents.com/macaw/";

  container.append(projectPic);
  container.append(title);
  container.append(subtitle);
  container.append(githubButton);
  container.append(siteButton);
}
