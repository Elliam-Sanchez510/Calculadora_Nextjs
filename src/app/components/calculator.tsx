'use client'
import React, { useState } from 'react';
import Keyboard from '../components/keyboard';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');

    const handleButtonClick = (button: string) => {
        if (button === '=') {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error');
            }
        } else if (button === 'C') {
            setInput('');
        } else {
            setInput(input + button);
        }
    };

    return (
        <div className="bg-white p-10 rounded-lg shadow-lg">
            <input
                type="text"
                className="p-6 w-full border border-gray-300 text-3xl text-right bg-gray-500 text-white rounded-tl-lg rounded-tr-lg"
                placeholder="0"
                readOnly
                value={input}
                style={{ marginTop: "0.2rem" }}
            />
            <Keyboard onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;
