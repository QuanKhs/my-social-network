
import React from 'react';
import './BtnSubmit.scss';

export default function BtnSubmit(props) {
    const { name } = props;
    return (
        <div className="submit">
            <button type="submit" className="btn">{name}</button>
        </div>
    )
}