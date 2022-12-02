import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const obterListagemCampeonatosCadastrados = () => {
  return API.get("/Home/listagemCampeonatos.json");
};

export const obterListagemJogosDisponiveis = () => {
  return API.get("/Home/listagemJogosDisponiveis.json");
};

export const obterDadosPlayer = () => {
  return API.get("/Home/dadosPlayer.json");
};

export const obterListagemNoticias = () => {
  return API.get("/Home/noticias.json");
};
