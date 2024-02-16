import React from 'react';
import PlayIcon from '../assets/img/svg/play-icon.svg';

export default function SongCard({ songImg, songTitle }) {
    return (
        <>
            <div className='song-card d-flex flex-column position-relative'>

                <div className="card-img">
                    <img src={songImg} alt="card-img/jpg" />
                </div>

                <button className='card-play-btn d-flex align-items-center justify-content-center position-absolute'>
                    <img src={PlayIcon} alt="play-icon/svg" />
                </button>

                <div className="tag-box position-absolute d-flex flex-column align-items-start overpass">
                    <span className="song-name d-flex align-items-center justify-content-center">
                        <p className="mb-0 position-relative">♪</p>{' '}{songTitle}
                    </span>
                </div>
            </div>
        </>
    );
};