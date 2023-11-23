import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./api";


function App() {
  const [fraseDaSorte, setFraseDaSorte] = useState("");
  const [error, setError] = useState(null);

  const handleClick = () => {
    console.log("Botão clicado"); // Adicione esta linha
    api
      .get("/cookies/aleatorio")
      .then((response) => {
        setFraseDaSorte(response.data);
        console.log(fraseDaSorte);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <div>
      <header>
        <p>Seja bem vindo ao meu projeto de biscoitos da sorte!</p>
        <p>Clique no botão para tirar uma frase da sorte</p>
        <button onClick={handleClick}>Frase da sorte</button>
        {fraseDaSorte && <p>{fraseDaSorte}</p>}
      </header>
    </div>
  );
}

export default App;
