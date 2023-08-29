import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Main from "./components/pages/main/Main";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;