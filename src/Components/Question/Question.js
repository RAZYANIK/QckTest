import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionItems from '../QuestionItems/QuestionItems';

const Question = () => {

    const [correctAnswer, setCorrectAnswer] = useState("");
    const question = useLoaderData();

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <h3 className="text-lg font-semibold text-black">
                        {" "}
                        The correct answer is:{" "}
                        <span className="text-orange-400">{correctAnswer}</span>
                    </h3>
                </div>
            </div>
            <div>
                {question.data.questions.map((questionItem) => (
                    <QuestionItems
                        key={questionItem.id}
                        questionItem={questionItem}
                        setCorrectAnswer={setCorrectAnswer}
                    ></QuestionItems>
                ))}
            </div>

        </div>

    );
};

export default Question;