import React, { useState } from 'react';
import FlashcardForm from './Components/FlashcardForm';
import FlashcardList from './Components/FlashcardList';
import Quiz from './Components/Quiz';
import Score from './Components/Score';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  return (
    <div className="app">
      <h1>Flashcard Quiz App</h1>
      <FlashcardForm addFlashcard={addFlashcard} />
      <FlashcardList flashcards={flashcards} />
      <Quiz flashcards={flashcards} setScore={setScore} />
      <Score score={score} />
    </div>
  );
};

export default App;
