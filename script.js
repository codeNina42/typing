const quotes = [
  "Programming is fun when you practice daily.",
  "JavaScript makes websites more interactive.",
  "Typing fast helps improve productivity.",
  "Coding requires patience and persistence.",
  "Never stop learning new technologies."
];

let startTime, endTime;
let randomQuote = "";

function startTest() {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = randomQuote;
  document.getElementById("input").value = "";
  document.getElementById("input").disabled = false;
  document.getElementById("input").focus();
  startTime = new Date().getTime();
}

function endTest() {
  document.getElementById("input").disabled = true;
  endTime = new Date().getTime();
  let totalTime = (endTime - startTime) / 1000;

  let typedText = document.getElementById("input").value.trim();
  let wordsTyped = typedText.split(" ").length;

  let speed = Math.round((wordsTyped / totalTime) * 60);

  let accuracy = calculateAccuracy(randomQuote, typedText);

  document.getElementById("result").innerText =
    `Speed: ${speed} WPM | Accuracy: ${accuracy}%`;
}

function calculateAccuracy(original, typed) {
  let correct = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === original[i]) {
      correct++;
    }
  }

  return Math.round((correct / original.length) * 100);
}
