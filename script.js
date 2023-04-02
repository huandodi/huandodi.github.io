function typeWords(words, element) {
  let wordIndex = 0;
  let letterIndex = 0;
  const intervalId = setInterval(() => {
    if (letterIndex < words[wordIndex].length) {
      element.textContent += words[wordIndex][letterIndex];
      letterIndex++;
    } else {
      wordIndex++;
      letterIndex = 0;
      element.textContent = '';
      if (wordIndex === words.length) {
        clearInterval(intervalId);
      }
    }
  }, 50);
}

window.addEventListener('load', () => {
  const words = ['Linguistics', 'Sociolinguistics', 'Language Policy Planning', 'Language Revitalisation'];
  const wordElement = document.getElementById('word-display');
  typeWords(words, wordElement);
});
