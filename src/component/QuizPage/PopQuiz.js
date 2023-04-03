import React from 'react'
import { useState } from 'react';
import './QuizCards.css'


const PopQuiz = () => {
    var Questionbank = [
        {
            Question: "Who did Forbes name the youngest self-made billionaire ever in 2019?",
            Answers: [
                { Answer: "Kylie Jenner", isCorrect: true },
                { Answer: "Hrithik Roshan", isCorrect: false },
                { Answer: "Ananya Pandey", isCorrect: false },
                { Answer: "Selena Gomez", isCorrect: false }
            ]
        },
        
        {
            Question: "How many times did Ross Geller get divorced on Friends?",
            Answers: [
                { Answer: "5", isCorrect: false },
                { Answer: "3", isCorrect: true },
                { Answer: "10", isCorrect: false },
                { Answer: "He never got divorced", isCorrect: false }
            ]
        }, {
            Question: "What modern-day item made a cameo in the final season of Game of Thrones?",
            Answers: [
                { Answer: "Starbucks Cup", isCorrect: true },
                { Answer: "Mobile Phone", isCorrect: false },
                { Answer: "Fan", isCorrect: false },
                { Answer: "Dunkin Donuts", isCorrect: false }
            ]
        },
        {
            Question: "How many Harry Potter books and movies are there?",
            Answers: [
                { Answer: "7 books and 9 movies", isCorrect: false },
                { Answer: "9 books and 7 movies", isCorrect: false },
                { Answer: "7 books and 8 movies", isCorrect: true },
                { Answer: "8 books and 7 movies", isCorrect: false }
            ]
        },
        {
            Question: "Which Avenger other than Captain America was able to pick up Thor's Mjolnir in the Marvel movies??",
            Answers: [
                { Answer: "Ironman", isCorrect: false },
                { Answer: "Black Panther", isCorrect: false },
                { Answer: "Vision", isCorrect: true },
                { Answer: "Spiderman", isCorrect: false }
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

export default PopQuiz;