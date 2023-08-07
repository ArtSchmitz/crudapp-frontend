import React, { useState, useEffect } from "react";
import axios from "axios";

export const Cadastrar = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [message, setMessage] = useState("");

  const newBook = {
    title: title,
    author: author,
    publisher: publisher,
  };

  const addBook = async () => {
    await axios
      .post("http://127.0.0.1:8000/api/book", newBook)
      .then((response) => {
        console.log(response.data.message, response.data);
        setTitle("");
        setAuthor("");
        setPublisher("");
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar o livro", error);
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
      <button type="submit" className="btn btn-primary text-center">
        Cadastrar
      </button>
    </form>
  );
};
