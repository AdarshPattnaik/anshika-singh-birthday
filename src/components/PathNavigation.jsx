import React from 'react';
import { Link } from 'react-router-dom';
import TraceBackIcon from '../assets/img/svg/trace-back-icon.svg';

export default function PathNavigation({ path }) {
    return (
        <>
            <Link
                to={`/${path}`}
                className="path-nav-btn d-flex align-items-center justify-content-center position-absolute">
                <img src={TraceBackIcon} alt='trace-back-icon/svg' />
            </Link>
        </>
    );
};