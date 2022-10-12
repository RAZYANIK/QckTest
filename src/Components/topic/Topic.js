import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    const navigate = useNavigate();

    const goToQuestions = () => {
        navigate(`/home/${id}`);
    };
    return (

        <div className='topic-container'>
            <img src={logo} alt="" />
            <h1>{name}</h1>
            <h2>Total Question: {total}</h2>
            <button className='btn font-bold text-teal-100' onClick={goToQuestions}>Start Quiz</button>
        </div>

    );
};

export default Topic;