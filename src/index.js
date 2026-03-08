function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3986b1bo304da0tf76e74d198cd0536a";
  let context =
    "You are a very funny poem expert and writes short poems. Your goal is to write a 4 line poem in basic HTML. Make sure you follow the users instructions.Do not write out 'html' on the top of the poem.Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating poem about ${instructionsInput.value}</div> `;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
