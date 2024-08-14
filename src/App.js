import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AuthHandler from './components/AuthHandler';
import Onebox from './components/Onebox';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/auth" element={<AuthHandler />} />
                <Route path="/onebox" element={<Onebox />} />
            </Routes>
        </Router>
    );
}

export default App;
