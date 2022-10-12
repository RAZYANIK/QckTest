import React, { useState } from 'react';
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionItems = ({ questionItem, setCorrectAnswer }) => {
    const { question, correctAnswer, options } = questionItem;

    const [selectedOption, setSelectedOption] = useState('');

    const showCorrectAnswer = () => {
        setCorrectAnswer(correctAnswer);
    };

    const isSelected = (value) => selectedOption === value;

    const handleOptionClick = (e) => {
        setSelectedOption(e.target.value);
        if (e.target.value === correctAnswer) {
            toast.success("This is correct", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error("Your Ans is incorrect. Please try again!", {
                position: "top-center",
                autoClose: 3000,
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
        <div className="mt-10 bg-orange-300 p-10 rounded-3xl">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-lg font-bold text-orange-800">{question}</h1>
                <button onClick={showCorrectAnswer} className="hover:cursor-pointer focus:cursor-pointer cursor-pointer btn" >
                    <label htmlFor="my-modal-3" >
                        <EyeIcon className="h-6 w-6 text-slate-400 text-center" />
                    </label>
                </button>
            </div>

            <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center"
                id="option-item-1">
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