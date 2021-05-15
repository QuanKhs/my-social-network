import React from 'react';
import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading__preloader">
                <div className="loading__preloader__inner ">
                    <div className="loadingio-spinner-bean-eater-ouf5226ph8c">
                        <div className="ldio-xfm30x8tkja">
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="classic-1">Loading</div>
                </div>
            </div>
            <div className="loading__overlay animate__animated animate__fadeInUp" style={{ height: '100vh' }}></div>
        </div>
    )
}