import React from 'react'
import { useState } from 'react';
import './QuizCards.css'


const India = () => {
    var Questionbank = [
        {
            Question: "What is the capital of India?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Ranchi", isCorrect: false },
                { Answer: "Patna", isCorrect: false }
            ]
        },
        {
            Question: "Who is the PM of India?",
            Answers: [
                { Answer: "Amit Shah", isCorrect: false },
                { Answer: "Modi", isCorrect: true },
                { Answer: "Raga", isCorrect: false },
                { Answer: "Kejri", isCorrect: false }
            ]
        }, {
            Question: "How many states are there in India",
            Answers: [
                { Answer: "34", isCorrect: false },
                { Answer: "29", isCorrect: false },
                { Answer: "32", isCorrect: true },
                { Answer: "33", isCorrect: false }
            ]
        },
        {
            Question: "In which state Siliguri is?",
            Answers: [
                { Answer: "West Bangal", isCorrect: true },
                { Answer: "Uttar Pradesh", isCorrect: false },
                { Answer: "Rajasthan", isCorrect: false },
                { Answer: "Assam", isCorrect: false }
            ]
        },
        {
            Question: "Who is the richest person in India",
            Answers: [
                { Answer: "Anil Ambani", isCorrect: false },
                { Answer: "Adani", isCorrect: false },
                { Answer: "Mukesh Ambani", isCorrect: true },
                { Answer: "Ratan Tata", isCorrect: false }
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

export default India;