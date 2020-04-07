import React from 'react';

export function Fab({ children, onClick }) {
    return (
        <div onClick={onClick} className="fab">
            {children}
        </div>
    );
}