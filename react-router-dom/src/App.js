import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
