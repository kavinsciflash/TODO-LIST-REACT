import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import List from './components/List';

function App() {

  const [input, setInput] = useState([]);
  const [listItem, setListItem] = useState([]);
  const [mode, setMode] = useState("add");
  const [id, setId] = useState("");

  axios.defaults.baseURL = process.env.REACT_APP_NODE_ENV == "development" ? process.env.REACT_APP_LOCAL_BASE_URI : process.env.REACT_APP_SERVER_BASE_URI;

  const handleList = async () => {
    if (input != '' && input != null && input != undefined && mode == "add") {
      const Input = { todos: input }
      axios.post(`/create-todo`, Input).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    }
    else if (mode == "edit") {
      const Input = { todos: input }
      axios.put(`/update-todo/${id}`, Input).then(({ data }) => {
        console.log(data)
        setMode("add")
        setInput("")
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    axios.get(`/get-todo`).then(({ data }) => {
      setListItem(data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])




  return (
    <main className="todo_list">
      <div className="main_holder">
        <h1>CRUD Operations</h1>
        <div className="input_holder">
          <input className="input" value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button onClick={handleList}>{mode == "add" ? "Add" : "Update"}</button>
        </div>
        <div className='list_holder'>
          <h2>List</h2>
          <List listItem={listItem} setInput={setInput} setMode={setMode} setId={setId} />
        </div>
      </div>
    </main>
  );
}

export default App;
