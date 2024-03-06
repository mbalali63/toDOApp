import React from "react";
import './../styles/SearchBar.css'
/* import {addTask } from "./TasksList"; */

export default function SearchBar({addTask}) {
    return (
        <section className="search-bar">
            <input id="task-input-box" type="text" placeholder="Add New Task"/>
            <button id="addBtnMain" onClick={addTask}>Add</button>
        </section>
    )
}