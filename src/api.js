import axios from "axios";

export const api = axios.create({
  baseURL: "https://desafio02-biscoito-da-sorte.vercel.app",
});
