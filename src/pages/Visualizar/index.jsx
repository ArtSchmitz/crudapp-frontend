import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Visualizar = () => {
  const { id: routeId } = useParams();

  useEffect(() => {
    const visuBook = async () => {
      try {
        await axios
          .get(`http://127.0.0.1:8000/api/books/${routeId}`)
          .then((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log(error.response);
      }
    };
    visuBook();
  }, []);

  return <h1>VIZUALIZAR</h1>;
};
