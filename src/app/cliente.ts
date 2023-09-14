export class Cliente {
  static LastId = 1;
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: number;

  constructor() {
    this.id= ++Cliente.LastId;
    this.nome = '';
    this.sobrenome = '';
    this.email = '';
    this.telefone = 0;
  }
}
