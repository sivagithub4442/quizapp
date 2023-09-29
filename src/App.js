import Quizview from './components/Quizview';
import Scoreview from './components/Scoreview';
import './App.css';
import './components/Quizview.css';
import { useState } from 'react';


function App() {

  const questions = [
    {
      question: "Total number of Oceans in the world is",
      answers: [{ text : "7"},{ text : "6"},{text : "5",isCorrect: true},{text : "4"}],
    },

    {
      question: "CEO of Tesla",
      answers: [{text : "John Adams"},{ text : "Jeff Bezos"},{ text : "Elon Musk",isCorrect: true},{text : "Bill Gates"}],
    },

    {
      question: "Where is statue of liberty situated ?",
      answers: [{ text : "Spain"},{ text : "USA",isCorrect: true},{ text : "Russia"},{text : "UK"}],
    },

    {
      question: "Capital of germany",
      answers: [{ text : "Paris"},{ text : "New York"},{ text : "Dublin"},{text : "Berlin",isCorrect: true}],
    },
    {
      question: "Who co-founded Apple Inc. along with Steve Jobs ?",
      answers: [{ text : "Bill Gates"},{ text : "Mark Zuckerberg"},{text : "Steve Wozniak",isCorrect: true},{ text : "Jane Austen"}],
    },

    {
      question: "What is the value of π (pi) to two decimal places?",
      answers: [{ text : "4.13"},{ text : "3.41"},{ text : "3.14",isCorrect: true},{text : "4.31"}],
    },

    {
      question: " What is the chemical symbol for gold?",
      answers: [{ text : "Ao"},{ text : "Go"},{ text : "Ag"},{text : "Au",isCorrect: true}],
    },

    {
      question: " Who was the first President of the United States?",
      answers: [{ text : "George Washington",isCorrect: true},{ text : "John Adams"},{ text : "Benjamin Franklin"},{text : "Thomas Jefferson"}],
    },

    {
      question: " Which African country is known as the Rainbow Nation ?",
      answers: [{ text : "South Africa",isCorrect: true},{ text : "Nigeria"},{ text : "Egypt"},{text : "Kenya"}],
    },

    {
      question: " What is the name of the nearest galaxy to the Milky Way?",
      answers: [{ text : "Orion Nebula"},{ text : "Whirlpool Galaxy"},{ text : "Andromeda Galaxy",isCorrect: true},{text : "Sombrero Galaxy"}],
    },


    

  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [isQuizover, setisQuizover] = useState(false);
  const [score, setscore] = useState(0);

  // Define handleAnswer function
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setscore(score + 1);
    const next = currentQuestion + 1;
    if (next < questions.length) setcurrentQuestion(next);
    else setisQuizover(true);
  };

  // Define handleReset function
  const handleReset = () => {
    setisQuizover(false);
    setscore(0);
    setcurrentQuestion(0);
  };

  return (
    
    <>
      <div className='App'>
        
        {isQuizover ? (
          <Scoreview score={score} handleReset={handleReset} />
        ) : (
          <Quizview questions={questions} currentQuestion={currentQuestion} handleAnswer={handleAnswer} />
        )} 
      </div>
    </>
  );
}

export default App;