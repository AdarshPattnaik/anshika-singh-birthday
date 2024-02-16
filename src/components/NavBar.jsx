import React from 'react';
import { motion } from 'framer-motion';
import PathNavigation from './PathNavigation';

export default function NavBar() {
    return (
        <>
            <motion.nav className="navbar d-flex align-items-center justify-content-center position-relative"
                variants={{
                    hidden: { opacity: 0, y: -60 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                exit={{ opacity: 0, y: -20 }}>
                <PathNavigation path="" />
                <h1 className="mulish">Tune Shrine</h1>
            </motion.nav>
        </>
    );
};