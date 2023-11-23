import { useState } from "react";
import "./App.css";
import { api } from "./api";

function App() {
  const [fraseDaSorte, setFraseDaSorte] = useState("");
  const [, setError] = useState(null);

  const handleClick = () => {
    console.log("Botão clicado"); // Adicione esta linha
    api
      .get("/cookies/aleatorio")
      .then((response) => {
        setFraseDaSorte(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  return (
    <div>
      <header>
        <p>Clique no botão para tirar uma frase da sorte!</p>
        <button onClick={handleClick}>Frase da sorte</button>
        {fraseDaSorte && <p>{fraseDaSorte}</p>}
      </div>
    </section>
  );
}

export default App;
