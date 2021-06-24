import React from 'react';

export const Header: React.FC<{title}> = ({ title }): JSX.Element => {
    return (
        <div className={`text-gray-100 text-xl`}>
            <div className={`p-2.5 mt-1 flex items-center`}>
            <i className={`bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600`}></i>
            <h1 className={`font-bold text-gray-200 text-[15px] ml-3`}>{title || ''}</h1>
            <i
                className={`bi bi-x cursor-pointer ml-28 lg:hidden`}
                // onclick="openSidebar()"
            ></i>
            </div>
           
        </div>
    );
};