function typeWords(words, element) {
  let index = 0;
  const intervalId = setInterval(() => {
    element.textContent += words[index][0];
    words[index] = words[index].slice(1);
    if (words[index].length === 0) {
      index++;
      if (index === words.length) {
        clearInterval(intervalId);
      }
    }
  }, 100); // Adjusted from 200ms to 100ms for faster typing
}

const words = ["Linguistics", "Sociolinguistics", "Language Policy Planning", "Language Revitalisation"];
const element = document.getElementById("typing-effect");
typeWords(words, element);
