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
  let ghAnchor = document.createElement("a");
  let siteButton = document.createElement("button");
  let siteAnchor = document.createElement("a");

  projectPic.src = "newpen.png";
  projectPic.alt = "Screenshot of the Portland ESL Network Website";
  title.textContent = "Portland ESL Network Website";
  subtitle.textContent = "Volunteer website development using WordPress";
  githubButton.className = "customButtons";
  ghAnchor.href = "https://github.com/stephr3/portland-esl-network";
  ghAnchor.textContent = "GitHub Repo";
  githubButton.append(ghAnchor);
  siteButton.className = "customButtons";
  siteAnchor.textContent = "Live Site";
  siteAnchor.href = "https://portlandesl.com/";
  siteButton.append(siteAnchor);

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
  let ghAnchor = document.createElement("a");
  let siteButton = document.createElement("button");
  let siteAnchor = document.createElement("a");

  projectPic.src = "levelupgerman.png";
  projectPic.alt = "Screenshot of the Level Up German Website Homepage";
  title.textContent = "Level Up German";
  subtitle.textContent = "Volunteer website development using WordPress";
  githubButton.className = "customButtons";
  ghAnchor.href = "https://github.com/deanajackson/germansite";
  ghAnchor.textContent = "GitHub Repo";
  githubButton.append(ghAnchor);
  siteButton.className = "customButtons";
  siteAnchor.textContent = "Live Site";
  siteAnchor.href =
    "http://deanajackson.webhostingforstudents.com/level-up-german/index.html";
  siteButton.append(siteAnchor);

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
  let ghAnchor = document.createElement("a");
  let siteButton = document.createElement("button");
  let siteAnchor = document.createElement("a");

  projectPic.src = "macaws.png";
  projectPic.alt = "Screenshot of Hyacynth Macaw Website homepage";
  title.textContent = "Hyacynth Macaw - Project Intermediate CSS class";
  subtitle.textContent =
    "This was a project for an intermediate CSS class I took at PCC";
  githubButton.className = "customButtons";
  ghAnchor.href = "https://github.com/deanajackson/macaws";
  ghAnchor.textContent = "GitHub Repo";
  githubButton.append(ghAnchor);
  siteButton.className = "customButtons";
  siteAnchor.textContent = "Live Site";
  siteAnchor.href = "http://deanajackson.webhostingforstudents.com/macaw/";
  siteButton.append(siteAnchor);

  container.append(projectPic);
  container.append(title);
  container.append(subtitle);
  container.append(githubButton);
  container.append(siteButton);
}
