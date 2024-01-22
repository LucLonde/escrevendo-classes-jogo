class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const meuHeroi = new Hero('Herói1', 25, 'mago');
  meuHeroi.atacar();
  
  const outroHeroi = new Hero('Herói2', 30, 'guerreiro');
  outroHeroi.atacar();
  