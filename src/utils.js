export const checkGuess = (guess, targetWord) => {
    const result = Array(targetWord.length).fill(null).map(() => ({ letter: '', status: '' }));
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');
    
    //for every letter in guess check for correct letter and mark it as correct and remove from targetletters
    guessLetters.forEach((letter, i) => {
      result[i].letter = letter;
      if (letter === targetLetters[i]) {
        result[i].status = 'correct';
        targetLetters[i] = null; 
      }
    });
  
    // for every letter in guess check for present and absent letters ignoring any with correct status
    // if present is found mark it as present and remove it from targetletters 
    guessLetters.forEach((letter, i) => {
      if (result[i].status !== 'correct') {
        const targetIndex = targetLetters.indexOf(letter);
        if (targetIndex !== -1) {
          result[i].status = 'present';
          targetLetters[targetIndex] = null;
        } else {
          result[i].status = 'absent';
        }
      }
    });
  
    return result;
  };

  
  export const getRandomWord = (wordList) => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  };