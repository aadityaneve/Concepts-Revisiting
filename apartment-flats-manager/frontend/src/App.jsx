import logo from './logo.svg';
import './App.css';

import Flats from './components/Flats';
import { Routes, Route } from 'react-router-dom';
import FlatResidents from './components/FlatResidents';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
    const [residentsOfFlat, setResidentsOfFlat] = useState([]);

    return (
        <div className='App'>
            {/* <Navbar /> */}
            <Routes>
                <Route
                    path='/'
                    element={
                        <Flats
                            residentsOfFlat={residentsOfFlat}
                            setResidentsOfFlat={setResidentsOfFlat}
                        />
                    }
                />
                <Route
                    path='/residents-of-flat'
                    element={
                        <FlatResidents residentsOfFlat={residentsOfFlat} />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
