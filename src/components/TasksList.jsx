import React from "react";
import './../styles/TasksList.css'

let tasksJSON = [
    '{"description":"Learn Math","completed":"false"}',
    '{"description":"Learn React","completed":"false"}',
    '{"description":"Write New Paper","completed":"false"}',
    '{"description":"Read Book I","completed":"false"}',
    '{"description":"Purchase Requirments","completed":"false"}'
];
let tasksJsonObj = tasksJSON.map((element) => JSON.parse(element))


function addTask() {

}

export default function TasksList() {
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

