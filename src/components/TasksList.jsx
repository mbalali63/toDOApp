import React from "react";
import './../styles/TasksList.css'

export default function TasksList({tasksObj,toggleComplete}) {


    /* const visibileTasks = tasksObj.filter((item0) => item0.show); */

    const tasksList = tasksObj.map( (item,index) => 
        {
            const description = item.description;
            const onCheckBoxChange = (element) => {
                if (item.completed) {
                    document.getElementById(`description-${index}`).style.backgroundColor = '#fff';
                }else
                {
                    document.getElementById(`description-${index}`).style.backgroundColor = '#11f54a';
                }
                toggleComplete(description)
            }
            const checkVisibilityStatus = (index0) => {                
                return tasksObj[index0].show ? "flex" : "none";
            }   
            return (
                <li style = {{display:checkVisibilityStatus(index)}}
                    key={index.toString()}>
                    <input
                        type="checkbox"
                        checked = {tasksObj.completed}
                        onChange= {onCheckBoxChange}
                        className="tasks-item-checkbox"
                        id = {index.toString()}
                    /> 
                    <p 
                        className="task-item-description" 
                        id={`description-${index}`}  
                    >      
                        {item.description}
                    </p>
                </li>
            )
        }
    )
    return (
        <section className="tasks-list">
            <ul>
                {tasksList}
            </ul>
        </section>
    )
}

