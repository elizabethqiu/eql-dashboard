const story = document.body.querySelector(".story")

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
    story.textContent = "Start typing your story here...";
})

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
    story.textContent = "";
})
