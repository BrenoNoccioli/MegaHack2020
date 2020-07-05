export interface Contrato {
    id: number,
    cliente_id: number,
    profissional_id: number,
    confirmado: boolean,
    data_requisicao: Date,
    data_realizacao: Date
  }