// Code based on chap 18 Eloquent Javascript

let form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  console.log("========= Form Submission ============");
  console.log("Name:", form.elements.name.value);
  console.log("Email:", form.elements.email.value);
  console.log("Message:", form.elements.message.value);
  event.preventDefault();
});
