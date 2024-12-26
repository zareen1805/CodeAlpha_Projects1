import React from 'react';

const FlashcardList = ({ flashcards }) => (
  <div className="flashcard-list">
    <h2>Flashcards</h2>
    {flashcards.map((flashcard, index) => (
      <div key={index} className="flashcard">
        <p><strong>Question:</strong> {flashcard.question}</p>
        <p><strong>Answer:</strong> {flashcard.answer}</p>
      </div>
    ))}
  </div>
);

export default FlashcardList;
