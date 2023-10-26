'use client'
import React from 'react';
interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
    return (
        <input
            type="text"
            className="display-input w-full p-4 text-3xl text-right bg-gray-200 rounded-lg mb-4 border-none"
            placeholder="0"
            readOnly
            value={value}
        />
    );
};

export default Display;