import React from 'react';
import ContriProvider from './contriContext';

export const Store: React.FC = ({ children }): JSX.Element => {
    return (
        <ContriProvider> 
            {children}
        </ContriProvider>
    );
};