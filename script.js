let btn = document.querySelector(".toggle-password");

btn.addEventListener("click", () => {
  let input = document.querySelector("#password");

  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
