import React, { useRef, useState } from 'react';
import "./Quiz.css";
import { data } from "../../../../Quiz App/src/assets/Data"


const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(null);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let [selectedTopic, setSelectedTopic] = useState(null);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const startQuiz = (topic) => {
        setSelectedTopic(topic);
        setQuestion(data[topic][0]);
    };

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (lock === true) {
            if (index === data[selectedTopic].length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[selectedTopic][index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data[selectedTopic][0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <>
            <div className="container">
                {!selectedTopic ? (
                    <>
                        <h2>Select a Topic</h2>
                        <hr />
                        <button onClick={() => startQuiz('html')} >HTML</button>
                        <button onClick={() => startQuiz('css')}>CSS</button>
                        <button onClick={() => startQuiz('javascript')}>JavaScript</button>
                        <button onClick={() => startQuiz('React')}>React js</button>
                    </>
                ) : (
                    <>
                        {result ? (
                            <>
                                <h2>You scored {score} out of {data[selectedTopic].length}</h2>
                                <button onClick={reset}>Reset</button>
                            </>
                        ) : (
                            <>
                                <h2>{index + 1}. {question.question}</h2>
                                <ul>
                                    <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                                    <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                                    <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                                    <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                                </ul>
                                <button onClick={next}>Next</button>
                                <div className="index">{index + 1} of {data[selectedTopic].length} Questions</div>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Quiz;
