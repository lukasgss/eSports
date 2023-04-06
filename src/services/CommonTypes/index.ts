export interface File {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: string;
  type: string;
  webkitRelativePath: string;
}

export interface CompeticaoInscricao {
  id: number;
  nome: string;
  jogo: string;
  valor: string;
  participantes: number;
}

export interface Campeonato {
  id: number;
  titulo: string;
  jogo: string;
  imagem: string;
  ano: number;
}
