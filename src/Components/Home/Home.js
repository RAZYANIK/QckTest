import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../topic/Topic';
import './Home.css'

const Home = () => {
    const topic = useLoaderData().data;
    // console.log(topic);
    return (
        <div >
            <div className='default-container'>
                <h1 className='md:text-5xl text-5xl font-extrabold text-white items-center pt-9'> lets prepare your skills with our dynamic quizzes</h1>
            </div>

            <div className='container'>
                {
                    topic.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;