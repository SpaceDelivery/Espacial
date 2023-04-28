import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, SobreNosotros } from "./footer";
import { Header } from "./Header";
import { Login } from "./login";
import Productos from "./Productos";
import'./Style/style.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    
    <Header/>
    <Productos/>
    <Footer/>

    </>
)