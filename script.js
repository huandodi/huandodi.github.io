function typeWords(words, element) {
  let wordIndex = 0;
  let letterIndex = 0;
  let intervalId;

  function typeNextLetter() {
    if (letterIndex < words[wordIndex].length) {
      element.textContent += words[wordIndex][letterIndex];
      letterIndex++;
    } else {
      clearInterval(intervalId);
      wordIndex++;
      if (wordIndex === words.length) {
        wordIndex = 0;
      }
      letterIndex = 0;
      element.textContent = "";
      intervalId = setInterval(typeNextLetter, 200);
    }
  }

  intervalId = setInterval(typeNextLetter, 200);
}


const words = ["Linguistics", "Sociolinguistics", "Language Policy Planning", "Language Revitalisation"];
const element = document.querySelector("#typing");

typeWords(words, element);
