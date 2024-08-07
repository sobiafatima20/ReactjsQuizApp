import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/quiz');
    }

    return (
        <div className="home-container">
            <h1>WELCOME TO WEBDEV QUIZ</h1>
            <button className="start-quiz" onClick={startQuiz}>Play</button>
        </div>
    );
}

export default Home;
