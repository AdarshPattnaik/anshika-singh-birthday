import React from 'react';
import { useParams } from 'react-router-dom';
import songList from '../assets/data/song-list';
import Song from '../components/Song';

export default function SongPlayer() {
    const { id } = useParams();

    React.useEffect(() => {
        const videoContainer = document.getElementById('video-container');
        const scrollPosition = parseInt(id - 1) * videoContainer.clientHeight;

        videoContainer.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }, [id]);

    return (
        <>
            <main className="player-page d-flex flex-column align-items-center justify-content-center">
                <div className="video-container" id="video-container">
                    {
                        songList.map((song, ind) =>
                            <Song song={song}
                                key={ind} />
                        )
                    }
                </div>
            </main>
        </>
    );
};