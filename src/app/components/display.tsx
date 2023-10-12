'use client'
import React from 'react';

interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
    return (
        <input
            type="text"
            className="p-6 w-full border border-gray-400 text-3xl text-right bg-gray-500 text-white rounded-tl-lg rounded-tr-lg"
            placeholder="0"
            readOnly
            value={value}
            style={{ marginTop: "0.2rem", width: "400px" }}
        />
    );
};

export default Display;
