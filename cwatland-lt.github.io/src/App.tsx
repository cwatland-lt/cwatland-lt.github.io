import './App.css'
import Home from "./Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "@/components/Header.tsx";
import {Box} from "@chakra-ui/react";
import Animations from './views/Animations.tsx';
import Maps from "@/views/Maps.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Box as="main" height={'100vh'} width={'100vw'}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/animations" element={<Animations />} />
                        <Route path="/maps" element={<Maps />} />
                    </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App
