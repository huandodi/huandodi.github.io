function typeWords(words, element) {
  let wordIndex = 0;
  let letterIndex = 0;
  let direction = 1;
  let intervalId = setInterval(() => {
    const word = words[wordIndex];
    const letters = word.slice(0, letterIndex + 1);
    element.textContent = letters;
    if (direction === 1) {
      letterIndex++;
      if (letterIndex === word.length) {
        direction = -1;
        setTimeout(() => {
          direction = 1;
          wordIndex++;
          if (wordIndex === words.length) {
            wordIndex = 0;
          }
        }, 1000);
      }
    } else {
      letterIndex--;
      if (letterIndex === -1) {
        direction = 1;
        wordIndex++;
        if (wordIndex === words.length) {
          wordIndex = 0;
        }
      }
    }
  }, 75);
}
const words = ['Linguistics', 'Sociolinguistics', 'Language Policy Planning', 'Language Revitalisation'];
const element = document.querySelector('#type-words');
typeWords(words, element);
