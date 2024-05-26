import React from 'react'
import axios from 'axios'


function List(props) {

  const { listItem, setInput, setMode, setId, setListItem } = props;

  const handleEdit = (id, item) => {
    setInput(item)
    setId(id)
    setMode("edit")
  }

  // Create an Axios instance with default headers for CORS
  const axiosInstance = axios.create({
    baseURL: 'http://34.229.14.151:5000',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const handleDelete = async (id) => {
    if (!id) return; // Do not proceed if input is empty
    try {
      await axiosInstance.delete(`/api/delete-todo/${id}`);
      // Fetch updated list after updating
      const response = await axiosInstance.get('/api/get-todo');
      console.log(response, setListItem);

      setListItem(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {
        listItem.length &&
        listItem.map((item, index) => {
          return <ul className='list_item' key={item._id}>
            <h3>{item.todos}</h3>
            <div className='icons'>
              <span onClick={() => handleDelete(item._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </span>
              <span onClick={() => handleEdit(item._id, item.todos)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                </svg>
              </span>
            </div>
          </ul>
        })
      }
    </>
  )
}

export default List