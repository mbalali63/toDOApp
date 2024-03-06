import React, {useState} from "react";
import './../styles/TasksList.css'

export default function TasksList() {    
    const [tasksJSON,setTasksJSON] = useState([
        '{"description":"Learn Math","completed":"false"}',
        '{"description":"Learn React","completed":"false"}',
        '{"description":"Write New Paper","completed":"false"}',
        '{"description":"Read Book I","completed":"false"}',
        '{"description":"Purchase Requirments","completed":"false"}'
    ]);
    let tasksJsonObj = tasksJSON.map((element) => JSON.parse(element))
    
    
    function addTask() {
        const taskInput = document.getElementById('task-input-box');
        if (taskInput.value === '') {
            alert('Please Enter New Task Description in the box.')
        }else
        {
            const newTaskJSON = `{"description":"${taskInput.value}","completed":"false"}`;
            setTasksJSON((prevTasksJSON) => [...prevTasksJSON, newTaskJSON])
        }
    }

    
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
            <button onClick={addTask}>Add New</button>
        </section>
    )
}

