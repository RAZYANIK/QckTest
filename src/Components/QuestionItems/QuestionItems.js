import React, { useState } from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionItems = ({ questionItem }) => {
    const { id, question, correctAnswer, options } = questionItem;

    const [selectedOption, setSelectedOption] = useState('');

    const showCorrectAnswer = (e) => {
        if (question === e.target.value) {
            console.log(correctAnswer);
        }
    };
    const isSelected = (value) => selectedOption === value;
    const handleOptionClick = (e) => {
        setSelectedOption(e.target.value);
        if (e.target.value === correctAnswer) {
            toast.success("Yepp, that's is correct", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error("Oops, that's incorrect. Please try again!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };
    return (
        <div>
            <div>
                <h1>{question}</h1>
                <button onClick={showCorrectAnswer}>
                    <label htmlFor="my-modal" className="modal-button">
                        <EyeIcon className="h-6 w-6 text-slate-400 pl-1" />
                    </label>
                </button>

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div>
                    <div>
                        <h3>
                            The correct answer is: {correctAnswer}
                        </h3>
                        <div>
                            <button>
                                <label htmlFor=""> Close</label>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <input
                    type="radio"
                    name={options[0]}
                    id={options[0]}
                    value={options[0]}
                    checked={isSelected(options[0])}
                    onChange={handleOptionClick}
                />
                <label htmlFor={options[0]} className="pl-5 text-slate-300">
                    {options[0]}
                </label>
            </div>
            <div
                className="bg-slate-700 my-4 p-4 rounded-lg flex items-center"
                id="option-item"
            >
                <input
                    type="radio"
                    name={options[1]}
                    id={options[1]}
                    value={options[1]}
                    checked={isSelected(options[1])}
                    onChange={handleOptionClick}
                />
                <label htmlFor={options[1]} className="pl-5 text-slate-300">
                    {options[1]}
                </label>
            </div>
            <div
                className="bg-slate-700 my-4 p-4 rounded-lg flex items-center"
                id="option-item"
            >
                <input
                    type="radio"
                    name={options[2]}
                    id={options[2]}
                    value={options[2]}
                    checked={isSelected(options[2])}
                    onChange={handleOptionClick}
                />
                <label htmlFor={options[2]} className="pl-5 text-slate-300">
                    {options[2]}
                </label>
            </div>
            <div
                className="bg-slate-700 my-4 p-4 rounded-lg flex items-center"
                id="option-item"
            >
                <input
                    type="radio"
                    name={options[3]}
                    id={options[3]}
                    value={options[3]}
                    checked={isSelected(options[3])}
                    onChange={handleOptionClick}
                />
                <label htmlFor={options[3]} className="pl-5 text-slate-300">
                    {options[3]}
                </label>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuestionItems;