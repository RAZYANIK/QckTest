import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionItems from '../QuestionItems/QuestionItems';

const Question = () => {
    const question = useLoaderData();
    const { id } = question.data;
    return (
        <div>
            {question.data.questions.map((questionItem) => (
                <QuestionItems
                    key={questionItem.id}
                    questionItem={questionItem}
                ></QuestionItems>
            ))}
        </div>
    );
};

export default Question;