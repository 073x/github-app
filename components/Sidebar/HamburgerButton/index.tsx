import React from 'react';


export const HBButtom: React.FC<{ toggleHandler: Function }> = ({ toggleHandler }): JSX.Element => {
    return (
        <span
            className={`absolute text-white text-4xl top-5 left-4 cursor-pointer`}
            onClick={() => toggleHandler()}
        >
            <i className={`bi bi-filter-left px-2 bg-gray-900 rounded-md`}></i>
        </span>
    );
};