import React, { useState, useEffect, useCallback } from 'react';
import Grid from './components/Grid';
import wordList from './wordList';
import { checkGuess, getRandomWord } from './utils';
import './App.css';
import Stars from './components/Stars';
import Instructions from './components/Instructions';

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null)); 
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [targetWord, setTargetWord] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false); 
  const [won, setWon] = useState(false); 
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [howToPlay, setHowToPlay] = useState(false); 

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setTargetWord(getRandomWord(wordList));
  }, []);

  const handleKeyDown = useCallback((event) => {
    const { key } = event;
    if(gameOver)return;

    if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5 && currentAttempt < 6) {
      setCurrentGuess((prevCurrentGuess) => prevCurrentGuess + key.toUpperCase());
    }

    if (key === 'Backspace' && currentGuess.length > 0) {
      setCurrentGuess((prevCurrentGuess) => prevCurrentGuess.slice(0, -1));
    }

    if (key === 'Enter' && currentGuess.length === 5 && currentAttempt < 6) {
      const guessResult = checkGuess(currentGuess, targetWord);
      setGuesses((prevGuesses) => {
        const newGuesses = [...prevGuesses];
        newGuesses[currentAttempt] = guessResult;
        return newGuesses;
      });

      if (currentGuess === targetWord) {
        setGameOver(true);
        setWon(true);
      } else if (currentAttempt === 5) {
        setGameOver(true);
        setWon(false);
      }

      setCurrentAttempt(currentAttempt + 1);
      setCurrentGuess('');
    }
  }, [currentGuess, currentAttempt, targetWord, gameOver]);

  useEffect(() => {     
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const resetGame = () => {
    setGuesses(Array(6).fill(null));
    setCurrentAttempt(0);
    setTargetWord(getRandomWord(wordList));
    setCurrentGuess('');
    setGameOver(false);
    setWon(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const toggleHowToPlay = () =>{
    setHowToPlay((prevValue) => !prevValue) 
  }

  return (
    <div className={`App ${theme}`}>
      <div className='buttons'>
        <span className="toggle" onClick={toggleTheme}>{theme === 'light' ? '☼' : '☽'}</span>
        <span className="toggle" onClick={toggleHowToPlay}>⁇</span>
      </div>
      <h1>Wordleish</h1>
      <Grid
        guesses={guesses}
        currentAttempt={currentAttempt}
        currentGuess={currentGuess}
      />

      {gameOver && (
        <div className='game-over'>
          <p className="game-over-button" onClick={resetGame}>
            {won ? 'You Won!' : 'Game Over!'}
          </p>
        </div>
      )}
      
      {howToPlay && (
       <Instructions/>
      )}
      {won && (
        <Stars/>
      )}
     
    </div>
  );
}

export default App;
