import React from "react";
import './../styles/TasksList.css'

export default function TasksList({tasksJsonObj}) {
    
    const tasksList = tasksJsonObj.map( (element,index) => 
        <li key={index.toString()}>
            <input type="checkbox" className="tasks-item-checkbox"/> <p className="task-item-description">{element.description}</p>
        </li>
    )
    return (
        <section className="tasks-list">
            <ul>
                {tasksList}
            </ul>
        </section>
    )
}

