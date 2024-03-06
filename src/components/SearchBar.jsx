import React from "react";
import './../styles/SearchBar.css'

export default function SearchBar() {
    return (
        <section className="search-bar">
            <input type="search" placeholder="Add New Task"/>
            <button>Add</button>
        </section>
    )
}