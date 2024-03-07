import React from "react";
import './../styles/Footer.css'


export default function Footer({filterAll,filterCompleted,filterActive}) {
    return (
        <footer>
            <div className="leftIconSet">
                {/*<div className="addBtn">&#x2b;</div>*/}
                {/*<div className="searchBtn">&#128270;</div>*/}
                {/*<div className="speratorBar">&#124;</div>*/}
                {/*<div className="status" id="status">3 Items Left</div>*/}
            </div>
            <div className="rightBtnSet">
                <button className="filterAll" onClick= {filterAll}>All</button>
                <button className="filterActive" onClick= {filterActive}>Active</button>
                <button className="filterCompleted" onClick= {filterCompleted}>Completed</button>
            </div>
        </footer>
    )
}