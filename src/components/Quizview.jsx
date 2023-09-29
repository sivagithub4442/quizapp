import React from 'react'
import './Quizview.css'

const Quizview = ({ questions, currentQuestion, handleAnswer }) => {
  return (
    <div className='qbody'>
      <div style={{textAlign:"center",marginBottom:"10px"}}>
        <h1>Quiz-App</h1>
       
        </div>
        <hr></hr>
        <br />
    <div style={{marginTop:"8px",marginBottom:"8px"}} className='inbody'>
      <div className="question">
          <div className="question-number">
              <span>Question {currentQuestion + 1} / {questions.length}</span>
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
      </div>
  
      <div className="answer">
          {questions[currentQuestion].answers.map(({ text , isCorrect}) =>( <button onClick={() => handleAnswer(isCorrect)} key={text}>{text}
  
          </button>))}
          
          
      </div>
  
    </div>
    </div>
  )
}

export default Quizview