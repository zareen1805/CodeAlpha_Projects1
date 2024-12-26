import React, { useState } from 'react';

const Quiz = ({ flashcards, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleAnswer = () => {
    const isCorrect = userAnswer.trim().toLowerCase() === flashcards[currentIndex].answer.trim().toLowerCase();
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    setUserAnswer('');
  };

  return flashcards.length > 0 ? (
    <div className="quiz">
      <h2>Quiz</h2>
      <p><strong>Question:</strong> {flashcards[currentIndex].question}</p>
      <input
        type="text"
        placeholder="Your Answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleAnswer}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  ) : (
    <p>Add flashcards to start the quiz!</p>
  );
};

export default Quiz;
