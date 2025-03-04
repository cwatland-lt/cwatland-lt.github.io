import './App.css'
import Home from "./Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "@/components/Header.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
