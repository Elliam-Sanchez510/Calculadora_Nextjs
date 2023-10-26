'use client'
import React, { useState } from 'react';
import Display from '../components/display';
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="calculator-container bg-white p-8 rounded-lg shadow-lg">
                <Display value={input} />
                <Keyboard onButtonClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default Calculator;