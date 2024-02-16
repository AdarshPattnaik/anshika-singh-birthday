import React, { useRef, useState, useEffect } from 'react'
import speakerOn from '../assets/img/svg/speaker-on-icon.svg';
import speakerOff from '../assets/img/svg/speaker-off-icon.svg';
import PfpImg from '../assets/img/jpg/pfp.jpg';
import BigPlayImg from '../assets/img/svg/big-play-icon.svg';
import BigLikeImg from '../assets/img/svg/big-like-icon.svg';
import LikeWhite from '../assets/img/svg/like-icon.svg';
import LikeRed from '../assets/img/svg/red-like-icon.svg';
import ReelBack from '../assets/img/svg/reel-back-icon.svg';
import { Link } from 'react-router-dom';

export default function Song({ song, ind }) {

    const [isVideoPlaying, setisVideoPlaying] = useState(false);
    const [speaker, setSpeaker] = useState(speakerOff);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [isLiked, setIsLiked] = useState(new Array(10).fill(false))

    const vidRef = useRef();

    const onVideoClick = (event) => {
        const card = event.currentTarget;
        const audio = card.querySelector('audio');

        if (isVideoPlaying) {
            audio.pause();
            setisVideoPlaying(false);
            setSpeaker(speakerOff);
            setCurrentAudio(null);
        } else {
            audio.play();
            setisVideoPlaying(true);
            setSpeaker(speakerOn);
            setCurrentAudio(audio);
        }
    };

    useEffect(() => {
        const scroll = document.getElementById("video-container");

        if (scroll) {
            scroll.addEventListener("scroll", () => {
                if (currentAudio) {
                    currentAudio.pause();
                    setisVideoPlaying(false);
                    setSpeaker(speakerOff);
                    setCurrentAudio(null);
                }
            });
        }
    }, [currentAudio]);

    const heart = (index) => {
        const heartImg = document.querySelectorAll('.big-like-img img')[index];
        const startTime = performance.now();
        const duration = 1000; // Animation duration in milliseconds

        const animateHeartbeat = (timestamp) => {
            const progress = (timestamp - startTime) / duration;
            const easeProgress = easeInOutCubic(progress);
            const opacity = 1;

            // Apply the scale transform using the easing function
            const scale = 1 + 0.3 * easeProgress;
            heartImg.style.transform = `scale(${scale})`;
            heartImg.style.opacity = opacity;

            if (progress < 1) {
                requestAnimationFrame(animateHeartbeat);
            } else {
                // Animation completed, reset the transform property
                heartImg.style.transform = 'scale(1)';
                heartImg.style.opacity = 0;
            }
        };

        // Start the animation
        requestAnimationFrame(animateHeartbeat);
    }
    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const handleLike = (event, ind) => {
        event.stopPropagation();
        if (isLiked[ind]) {
            const updatedArray = [...isLiked];
            // Set the desired index to true
            updatedArray[ind] = false;
            // Update state with the modified array
            setIsLiked(updatedArray);
        } else {
            heart(ind);
            const updatedArray = [...isLiked];
            // Set the desired index to true
            updatedArray[ind] = true;
            // Update state with the modified array
            setIsLiked(updatedArray);
        }
    };

    const doubleClick = (event, ind) => {
        event.stopPropagation();
        heart(ind);
        const updatedArray = [...isLiked];
        // Set the desired index to true
        updatedArray[ind] = true;
        // Update state with the modified array
        setIsLiked(updatedArray);
    }

    return (
        <>
            <div className="player-card d-flex flex-column position-relative"
                onClick={onVideoClick}
                onDoubleClick={(event) => doubleClick(event, parseInt(song.id - 1))}>

                {/* Reel Back */}
                <Link to='/songs' className='reel-back'>
                    <img src={ReelBack} alt="reel-back-icon/svg" />
                </Link>

                {/* Speaker Label */}
                <div className="speaker-label d-flex align-items-center justify-content-center position-absolute">
                    <img src={speaker} alt="speaker-label" />
                </div>

                {/* BG Image */}
                <img className='player-img'
                    src={song.img}
                    alt={`player-img${ind}`} />

                {/* Like Code */}
                <button className="like-btn position-absolute" onClick={(event) => handleLike(event, parseInt(song.id - 1))}>
                    <img src={isLiked[parseInt(song.id - 1)] ? LikeRed : LikeWhite} alt={isLiked ? "like-red/svg" : "like-white/svg"} />
                </button>

                {/* Big Heart Icon */}
                {
                    <div className='big-like-img'>
                        <img src={BigLikeImg} alt="big-like-icon/svg" />
                    </div>
                }

                {/* Big Play Icon */}
                {
                    isVideoPlaying ? <></> :
                        <div className='big-play-img'>
                            <img src={BigPlayImg} alt="big-play-icon/svg" />
                        </div>
                }

                {/* Audio */}
                <audio src={song.song} ref={vidRef} loop></audio>

                {/* Id: */}
                <div className="reel-id d-flex align-items-center">
                    <div className="pfp-img">
                        <img src={PfpImg} alt="pfp-img/jpg" />
                    </div>
                    <h6>Anshika Singh</h6>
                </div>

                {/* Description */}
                <p className='reel-desp'>
                    {song.p}
                </p>

                {/* Audio Sliding Title */}
                <a href={song.yt}
                    target='_blank'
                    rel='noreferrer'
                    className="tag-player-box position-absolute d-flex flex-column align-items-start overpass"
                    onClick={(e) => e.stopPropagation()}>
                    <span className="song-player-name d-flex align-items-center justify-content-center">
                        <p className="mb-0 position-relative">♪</p>{' '}{song.title}
                    </span>
                </a>
            </div>
        </>
    );
};