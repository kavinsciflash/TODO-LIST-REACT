import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';

function App() {
  const [input, setInput] = useState('');
  const [listItem, setListItem] = useState([]);
  const [mode, setMode] = useState("add");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get-todo');
        setListItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (!input) return; // Do not proceed if input is empty
    try {
      await axios.post('/api/create-todo', { todos: input });
      setInput('');
      // Fetch updated list after adding
      const response = await axios.get('/api/get-todo');
      setListItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    if (!input) return; // Do not proceed if input is empty
    try {
      await axios.put(`/api/update-todo/${id}`, { todos: input });
      setInput('');
      setMode('add');
      // Fetch updated list after updating
      const response = await axios.get('/api/get-todo');
      setListItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="todo_list">
      <div className="main_holder">
        <h1>CRUD Operations</h1>
        <div className="input_holder">
          <input className="input" value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button onClick={mode === 'add' ? handleAdd : handleUpdate}>{mode === 'add' ? 'Add' : 'Update'}</button>
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
