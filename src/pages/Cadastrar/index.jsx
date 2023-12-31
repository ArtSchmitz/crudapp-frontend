import React, { useState, useEffect } from "react";
import axios from "axios";

export const Cadastrar = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const newBook = {
    title: title,
    author: author,
    publisher: publisher,
    image: image,
  };

  const addBook = async () => {
    await axios
      .post("http://127.0.0.1:8000/api/book", newBook)
      .then((response) => {
        console.log(response.data.message, response.data);
        setTitle("");
        setAuthor("");
        setPublisher("");
        setImage("");
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Erro ao cadastrar livro!");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook();
  };

  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        setMessage("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 bg-white shadow-lg rounded-lg"
    >
      <div className="d-flex flex-column">
        <h2 className="mb-3 display-6">Cadastrar livro</h2>
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
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Insira o título do livro"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Autor
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Insira o nome do autor"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">
            Editora
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            placeholder="Insira o nome da editora"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Capa
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary text-center">
          Cadastrar
        </button>
      </div>
    </form>
  );
};
