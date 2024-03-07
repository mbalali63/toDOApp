import React, {useState} from "react";
import HeaderSec from "./components/HeaderSec"
import SearchBar from "./components/SearchBar"
import TasksList from "./components/TasksList"
import Footer from "./components/Footer"
import './../src/styles/app.css'

function App() {
  const [tasks,setTasks] = useState([
    {description:"Learn Math",completed:false,show:true},
    {description:"Learn React",completed:false,show:true},
    {description:"Write New Paper",completed:false,show:true},
    {description:"Read Book I",completed:false,show:true},
    {description:"Purchase Requirments",completed:false,show:true}
  ]);
//  let tasksJsonObj = tasks.map((element) => JSON.parse(element))
  function addTask() {
      const taskInput = document.getElementById('task-input-box');
      if (taskInput.value === '') {
          alert('Please Enter New Task Description in the box.')
      }else
      {
          const newTaskJSON = {description:`${taskInput.value}`,completed:false,show:true};
          setTasks((prevTasksJSON) => [...prevTasksJSON, newTaskJSON])
      }
  }
  function toggleComplete(description) {
    setTasks((prevTasks) => prevTasks.map( (task) => task.description === description ? {...task,completed: !task.completed} : task))
  }


  function filterAll() {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, show: true }))
    );
  }
  function filterCompleted() {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, show: task.completed }))
    );
  }
  
  function filterActive() {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, show: !task.completed }))
    );
  }
/*   function filterAll() {
    tasks.forEach( (element) => {
      element.show = true;
    })
    setTasks( () => tasks);
  } */
/*   function filterCompleted() {
    tasks.forEach( (element) => {
      element.show = element.completed
    })
    setTasks( () => tasks)
  }
  function filterActive() {
    tasks.forEach( (element) => {
      element.show = !element.completed
    })
    setTasks( () => tasks)
  } */
  return (
    <main>
      <HeaderSec />
      <SearchBar addTask = {addTask} />
      <TasksList tasksObj={tasks} toggleComplete={toggleComplete} />
      <Footer filterAll = {filterAll} filterActive={filterActive} filterCompleted={filterCompleted}/>

    </main>
  )
}

export default App
