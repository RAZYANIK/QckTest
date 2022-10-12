import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>quickTest</h1>
            <Link to='/'>Home</Link>
            <Link to='/quizTopics'>QuizTopics</Link>
            <Link to='/yourPerformance'>YourPerformance</Link>
            <Link to='/blog'>Blog</Link>

        </div>
    );
};

export default Header;