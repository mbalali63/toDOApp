import React from "react";
import './../styles/Footer.css'


export default function Footer() {
    return (
        <footer>
            <div className="leftIconSet">
                <div className="addBtn">&#x2b;</div>
                <div className="searchBtn">&#128270;</div>
                <div className="speratorBar">&#124;</div>
                <div className="status"><p>3 Items Left</p></div>
            </div>
            <div className="rightBtnSet">
                <button className="filterAll">All</button>
                <button className="filterActive">Active</button>
                <button className="filterCompleted">Completed</button>
            </div>
        </footer>
    )
}