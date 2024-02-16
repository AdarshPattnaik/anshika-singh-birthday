import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './routes/HomePage';
import SongPage from './routes/SongPage';
import SongPlayer from './routes/SongPlayer';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/songs' element={<SongPage />} />
          <Route path='/song/:id' element={<SongPlayer />} />
        </Routes>
      </Router>
    </>
  );
};