import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from './pages/page1/index'

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page1/>} />
            </Routes>
        </BrowserRouter>
    )
}