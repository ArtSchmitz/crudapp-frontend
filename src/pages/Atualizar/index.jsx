import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; 

export const Atualizar = () => {
  const [message, setMessage] = useState("");
  const [inputs, setInputs] = useState({});
  const { id: routeId } = useParams(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const editBook = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/book/${routeId}`, inputs)
      .then((response) => {
          setMessage(response.data.message);
          console.log()
        })
    } catch (error) {
      console.error(error);
      setMessage();
    }
  };

  return (
    <div>
      <h2>Atualizar livro</h2>
      <input
        type="text"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={inputs.author || ""}
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        type="text"
        name="publisher"
        value={inputs.publisher || ""}
        onChange={handleChange}
        placeholder="Publisher"
      />
      <button onClick={editBook}>Update Book</button>
      <p>{message}</p>
    </div>
  );
};
