function typeWords(words, element) {
  let index = 0;
  const intervalId = setInterval(() => {
    element.textContent += words[index];
    index++;
    if (index === words.length) {
      clearInterval(intervalId);
      setTimeout(() => {
        typeWords(words, element);
      }, 1500);
    }
  }, 100);
}

const words = [
  "Linguistics",
  "Sociolinguistics",
  "Language Policy Planning",
  "Language Revitalisation"
];

const typeWordsEl = document.querySelector("#type-words");
typeWords(words, typeWordsEl);
