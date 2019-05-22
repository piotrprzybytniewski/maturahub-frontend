import React from 'react';

export const Card = ({children}) => (
    <div className="card">
        <div className="card__header">
            <h4 className="card__title">MATEMATYKA</h4>
            <img src="/images/przedmioty/matematyka.svg" alt="matematyka matura" className="card__img" />
        </div>
        {children}
    </div>
);