import { useState } from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";


function App() {
    const[content, setContent] = useState('');


    return(
        <>
        <BrowserRouter >
            <Navigation setContent={setContent}/>
            
            <Routes>
                <Route path="/" element={<Main content={content}/>}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login/>} /> 
            </Routes>

        </BrowserRouter>
        </>
    )
}

export default App;