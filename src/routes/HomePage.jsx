import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

export default function SongPage() {

    const words = ['Euphoria!', 'Enchanting!', 'Cheers!'];
    const [index, setIndex] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change the interval time as needed

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

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
                    : <main className='home d-flex flex-column align-items-center justify-content-center'>
                        <motion.div
                            className='motion-write text-center mulish ibm-plex-sans text-uppercase'
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 60 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.25 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {words[index]}
                        </motion.div>
                        <motion.div className="transition-write-box text-center overpass d-flex align-items-center justify-content-center"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.35 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Typewriter
                                className="transition-write"
                                words={[
                                    'Happy Birthday Anshika Singh!',
                                    'May this special day be as vibrant and wonderful as your presence in our lives.',
                                    'Wishing you joy, success, and endless reasons to celebrate in the coming year.',
                                    'Discover the heartwarming songs that have been specially dedicated by clicking the button below.'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle=''
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </motion.div>

                        <motion.div className="home-bottom overpass w-100 d-flex align-items-center justify-content-center"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.45 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Link
                                to='/songs'
                                className='home-btn overpass'>
                                Explore the Tunes
                            </Link>
                        </motion.div>
                    </main>
            }
        </>
    );
};