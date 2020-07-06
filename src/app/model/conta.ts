export class Conta {
    id: number;
    email: string;
    senha: string;
    nome_completo: string;
    foto?: string;
    especialidade?: string[];
    classificacao?: number;
    logradouro?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
    latitude?: string;
    longitude?: string;
    pontuacao?: number;
  }