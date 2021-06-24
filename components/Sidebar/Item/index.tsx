import React from 'react';
import Link from 'next/link';

export const Item: React.FC<{ title: string, href: string }> = ({ title, href }): JSX.Element => {
    return (
        <Link href={href}>
            <div
                className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white`}
            >
                <i className={`bi bi-house-door-fill`}></i>
                <span className={`text-[15px] ml-4 text-gray-200 font-bold`}>{title || ''}</span>
            </div>
        </Link>
    );
};