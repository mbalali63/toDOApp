import React from "react"
import HeaderSec from "./components/HeaderSec"
import SearchBar from "./components/SearchBar"
import TasksList from "./components/TasksList"
import Footer from "./components/Footer"
import './../src/styles/app.css'

function App() {

  return (
    <main>
      <HeaderSec />
      <SearchBar />
      <TasksList />
      <Footer />

    </main>
  )
}

export default App
