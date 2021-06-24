import React from 'react';
import { Header } from '../../components/Sidebar/Header';
import { Item } from '../../components/Sidebar/Item';
import { HBButtom } from '../../components/Sidebar/HamburgerButton';


const items = [
    {
        href: '/user',
        title: 'Users'
    },
    {
        href: '/repo',
        title: 'Repositories'
    },
    // {
    //     href: '/contri',
    //     title: 'Contributors'
    // },
]


export const SideBar: React.FC = (): JSX.Element => {
    return (
        <div className={`w-full`}>
            <HBButtom toggleHandler={() => {}} />
            <div
                className={`flex-row sidebar fixed top-0 bottom-0 lg:left-0 p-2 overflow-y-auto text-center bg-gray-800 w-2/12 rounded-r `}>
                <Header title={`Github`} />
                <div className={`my-2 bg-gray-600 h-[1px]`}></div>
                {
                    items.map((item, idx) => (
                         <Item href={item.href} title={item.title} key={idx} />
                    ))
                }
            </div>
        </div>
    );
};