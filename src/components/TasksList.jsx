import React from "react";

let tasksJSON = [
    '{"description":"Learn Math","status":"false"}',
    '{"description":"Learn React","status":"false"}',
    '{"description":"Write New Paper","status":"false"}',
    '{"description":"Read Book I","status":"false"}',
    '{"description":"Purchase Requirments","status":"false"}'
];
let tasksJsonObj = tasksJSON.map((element) => JSON.parse(element))

export default function TasksList() {
    const tasksList = tasksJsonObj.map( (element,index) => 
        <li key={index.toString()}>
            <input type="checkbox"/> {element.description}
        </li>
    )
    return (
        <ul>
            {tasksList}
        </ul>
    )
}

