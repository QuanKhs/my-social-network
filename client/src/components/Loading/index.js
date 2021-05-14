import React from 'react';
import './Loading.scss';
import { PACMAN_LOADER } from 'constants/images';

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading__preloader">
                <div className="loading__preloader__inner ">
                    <img src={PACMAN_LOADER} alt="pacman" />
                    <div className="classic-1">Loading</div>
                </div>
            </div>
            <div className="loading__overlay animate__animated animate__fadeInUp" ></div>
        </div>
    )
}