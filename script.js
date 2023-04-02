function typeWords(words, element) {
  let index = 0;
  const intervalId = setInterval(() => {
    element.textContent += words[index];
    index++;
    if (index === words.length) {
      clearInterval(intervalId);
    }
  }, 200);
}


const words = ["Linguistics", "Sociolinguistics", "Language Policy Planning", "Language Revitalisation"];
const element = document.querySelector("#typing");

typeWords(words, element);
