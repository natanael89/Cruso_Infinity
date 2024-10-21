import React from "react";
import Header from "../Components/Common/Header/Header";
import "./../Styles/Home.css"
import Heros from "../Components/Container/Heros/Heros";
import Main from "../Components/Common/Main/Main";
import Footer from "../Components/Common/Footer/Footer";


const Home = () => {
    return (
        <div className="home">
            <Header />
            <Heros/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home