import React, {useState} from "react";
import HeaderSec from "./components/HeaderSec"
import SearchBar from "./components/SearchBar"
import TasksList from "./components/TasksList"
import Footer from "./components/Footer"
import './../src/styles/app.css'

function App() {
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
  return (
    <main>
      <HeaderSec />
      <SearchBar addTask = {addTask} />
      <TasksList tasksJsonObj={tasksJsonObj} />
      <Footer />

    </main>
  )
}

export default App
