import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import Header from './pages/components/Header';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/films/:id' element={ <Films/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;