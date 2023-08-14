import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Atualizar = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({});
  const { id: routeId } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const editBook = async () => {
    try {
      await axios
        .put(`http://127.0.0.1:8000/api/book/${routeId}`, inputs)
        .then((response) => {
          setMessage(response.data.message);
          console.log(response);
        });
    } catch (error) {
      console.log(error.response);
      setErrorMessage("Preencha todos os campos!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editBook();
  };

  useEffect(() => {
    let timer;
    if (message || errorMessage) {
      timer = setTimeout(() => {
        setMessage("");
        setErrorMessage("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [message, errorMessage]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 bg-white shadow-lg rounded-lg"
    >
      <div className="d-flex flex-column">
        <h2 className="mb-3 display-6">Atualizar livro</h2>
        {errorMessage && (
          <div className="alert alert-danger mb-3" role="alert">
            {errorMessage}
          </div>
        )}
        {message && (
          <div className="alert alert-success mb-3" role="alert">
            {message}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Autor
          </label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={inputs.author || ""}
            onChange={handleChange}
            placeholder="Author"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">
            Editora
          </label>
          <input
            type="text"
            className="form-control"
            name="publisher"
            value={inputs.publisher || ""}
            onChange={handleChange}
            placeholder="Publisher"
          />
        </div>
        <button type="submit" className="btn btn-primary text-center">
          Atualizar
        </button>
      </div>
    </form>
  );
};
