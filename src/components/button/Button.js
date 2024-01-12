import React from 'react';
import './button.styles.css'

export const Button = ({title, onClick}) => {
    return (
        <button onClick={onClick} className='button'>
            {title}
        </button>
    );
};
