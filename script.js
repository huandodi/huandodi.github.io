function typeWords(words, element) {
  let index = 0;
  let innerIndex = 0;
  let currentWord = '';
  let intervalId = setInterval(() => {
    if (index >= words.length) {
      clearInterval(intervalId);
      return;
    }
    currentWord = words[index];
    element.textContent += currentWord[innerIndex];
    innerIndex++;
    if (innerIndex === currentWord.length) {
      index++;
      innerIndex = 0;
      element.textContent += ' ';
    }
  }, 100);
}


const words = ["Linguistics", "Sociolinguistics", "Language Policy Planning", "Language Revitalisation"];
const element = document.getElementById("typing-effect");
typeWords(words, element);
