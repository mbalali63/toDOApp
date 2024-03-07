import React from "react";
import './../styles/InputBar.css'
/* import {addTask } from "./TasksList"; */

export default function SearchBar({addTask}) {
    return (
        <section className="input-bar">
            <input id="task-input-box" type="text" placeholder="Add New Task"/>
            <button id="addBtnMain" onClick={addTask}>Add</button>
        </section>
    )
}