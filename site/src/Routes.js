import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from './pages/page1/index'
import Page2 from './pages/page2/index'

export default function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page1/>} />
                <Route path="/surpresa" element={<Page2/>} />
            </Routes>
        </BrowserRouter>
    )
}