import React, { useState } from "react";
import { QuizApp } from "../utilities/Data";

function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0)
    const onClickEvent = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1;
        if( nextQuestion < QuizApp.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true)
        }
    }
	return (
		<div className="question-card">
			{showScore ? (
				<div className='score-section'>You scored {score} out of 4</div>
			) : (
				< >
					<div className="question-box">
						<div>
							<span>Question: {currentQuestion + 1}</span> / {QuizApp.length}
						</div>
						<h1>{QuizApp[currentQuestion].questionText}</h1>
					</div>
                    <div className="question-button">
                        { QuizApp[currentQuestion].answerOptions.map((questionAnswer) => (
                            <button onClick={() => onClickEvent(questionAnswer.isCorrect)}>{questionAnswer.answerText}</button>
                        )) }
                    </div>
				</>
			)}
		</div>
	);
}

export default Quiz;
