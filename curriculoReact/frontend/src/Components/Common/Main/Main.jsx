import React from "react";
import SlideCard from "../../Container/SlideCard/SlideCard";
import "./style.css"


const Main = () => {
    return(
        <div className="main-container">
            <div className="main-content">
            <div className="main-header">
                <SlideCard/>
                <SlideCard/>
                <SlideCard/>
            </div>
            <div className="main-body">
                <SlideCard/>
            </div>
            <div className="main-footer">
                <SlideCard/>
            </div>
            </div>
        </div>
    )
}

export default Main;