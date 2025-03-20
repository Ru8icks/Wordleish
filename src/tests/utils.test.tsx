import { expect, test, describe } from 'vitest';
import { checkGuess } from '../utils';

describe('checkGuess function', () => {
  test('marks correct letters in the right position', () => {
    const result = checkGuess('GHOST', 'GHOST');
    expect(result).toEqual([
      { letter: 'G', status: 'correct' },
      { letter: 'H', status: 'correct' },
      { letter: 'O', status: 'correct' },
      { letter: 'S', status: 'correct' },
      { letter: 'T', status: 'correct' },
    ]);
  });

  test('marks present letters in the wrong position', () => {
    const result = checkGuess('TRACE', 'REACT');
    expect(result).toEqual([
      { letter: 'T', status: 'present' }, 
      { letter: 'R', status: 'present' }, 
      { letter: 'A', status: 'correct' }, 
      { letter: 'C', status: 'correct' }, 
      { letter: 'E', status: 'present' }, 
    ]);
  });

  test('marks absent letters not in the target word', () => {
    const result = checkGuess('FLAME', 'REACT');
    expect(result).toEqual([
      { letter: 'F', status: 'absent' },  
      { letter: 'L', status: 'absent' },  
      { letter: 'A', status: 'correct' }, 
      { letter: 'M', status: 'absent' },  
      { letter: 'E', status: 'present' }, 
    ]);
  });
  test('marks correct letters before present', () => {
    const result = checkGuess('OTTER', 'WATER');
    expect(result).toEqual([
      { letter: 'O', status: 'absent' },  
      { letter: 'T', status: 'absent' },  
      { letter: 'T', status: 'correct' }, 
      { letter: 'E', status: 'correct' }, 
      { letter: 'R', status: 'correct' }, 
    ]);
  });
});