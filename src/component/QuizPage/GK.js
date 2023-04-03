import React from 'react'
import { useState } from 'react';
import './QuizCards.css'


const GK = () => {
    var Questionbank = [
        {
            Question: "The playing area of Golf is known as …",
            Answers: [
                { Answer: "Course", isCorrect: true },
                { Answer: "Arena", isCorrect: false },
                { Answer: "Ring", isCorrect: false },
                { Answer: "Court", isCorrect: false }
            ]
        },
        {
            Question: "Wailing Wall is located in …",
            Answers: [
                { Answer: "Russia", isCorrect: false },
                { Answer: "Israel", isCorrect: true },
                { Answer: "China", isCorrect: false },
                { Answer: "Serbia", isCorrect: false }
            ]
        }, {
            Question: "Rashtriya Panchayat is the Parliament of …",
            Answers: [
                { Answer: "Nepal", isCorrect: true },
                { Answer: "Pakistan", isCorrect: false },
                { Answer: "India", isCorrect: false },
                { Answer: "Bangladesh", isCorrect: false }
            ]
        },
        {
            Question: " Who among the following had first introduced the Olympic Games??",
            Answers: [
                { Answer: "Greek", isCorrect: true },
                { Answer: "Chinese", isCorrect: false },
                { Answer: "American", isCorrect: false },
                { Answer: "Italian", isCorrect: false }
            ]
        },
        {
            Question: "The term -face of stick is- related to …",
            Answers: [
                { Answer: "Javelin", isCorrect: false },
                { Answer: "Archery", isCorrect: false },
                { Answer: "Hockey", isCorrect: true },
                { Answer: "Golf", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default GK;