import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';

function App() {
  const [input, setInput] = useState('');
  const [listItem, setListItem] = useState([]);
  const [mode, setMode] = useState("add");
  const [id, setId] = useState("");


  // Create an Axios instance with default headers for CORS
const axiosInstance = axios.create({
  baseURL: 'http://34.229.14.151:5000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/get-todo');
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
      await axiosInstance.post('/api/create-todo', { todos: input });
      setInput('');
      // Fetch updated list after adding
      const response = await axiosInstance.get('/api/get-todo');
      setListItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    if (!input) return; // Do not proceed if input is empty
    try {
      await axiosInstance.put(`/api/update-todo/${id}`, { todos: input });
      setInput('');
      setMode('add');
      // Fetch updated list after updating
      const response = await axiosInstance.get('/api/get-todo');
      setListItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleItem = (data) => {
    setListItem(data)
  }

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
          <List listItem={listItem} setInput={setInput} setMode={setMode} setId={setId} setListItem={handleItem}/>
        </div>
      </div>
    </main>
  );
}

export default App;
