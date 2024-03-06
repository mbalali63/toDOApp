import React from "react";


export default function Footer() {
    return (
        <footer>
            <div className="leftIconSet">
                <div className="addBtn">&#x2b;</div>
                <div className="searchBtn">&#128270;</div>
            </div>
            <div className="speratorBar">&#10073;</div>
            <div className="centerSection"><p>3</p><p>Items Left</p></div>
            <div className="rightBtnSet">
                <button className="filterAll">All</button>
                <button className="filterActive">Active</button>
                <button className="filterCompleted">Completed</button>
            </div>
        </footer>
    )
}