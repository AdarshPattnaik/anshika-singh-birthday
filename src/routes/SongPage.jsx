import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import { Bars } from 'react-loader-spinner';
import SearchIcon from '../assets/img/svg/search-icon.svg';
import SongCard from '../components/SongCard';
import songList from '../assets/data/song-list';
import { Link } from 'react-router-dom';

export default function SongPage() {

    const [loading, setLoading] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    let filteredSongs = songList.filter((song) =>
        song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {
                loading
                    ? <div style={{ height: "100vh" }}
                        className="loading-page w-100 d-flex align-items-center justify-content-center" >
                        <Bars
                            height="40"
                            width="40"
                            color="#ff6fab"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    : <main className='song-page'>

                        <NavBar />

                        <motion.div className="search-box d-flex align-items-center justify-content-center"
                            variants={{
                                hidden: { opacity: 0, y: -60 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.75 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="search-field d-flex align-items-center justify-content-center">
                                <label htmlFor="searchBar" className="search-icon">
                                    <img src={SearchIcon} alt="search-icon/svg" />
                                </label>
                                <input
                                    className='text-capitalize'
                                    id="searchBar"
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </motion.div>

                        <section className="song-card-box justify-content-center">
                            {
                                filteredSongs.map((elem, ind) =>
                                    <Link to={`/song/${elem.id}`}
                                        key={ind}>
                                        <SongCard
                                            songImg={elem.img}
                                            songTitle={elem.title}
                                        />
                                    </Link>
                                )
                            }
                        </section>

                    </main>
            }
        </>
    );
};