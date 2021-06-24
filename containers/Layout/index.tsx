import React from 'react';


export const Layout: React.FC = ({ children }): JSX.Element => {
    return (
        <div className={``}>
            {children}
        </div>
    );
}