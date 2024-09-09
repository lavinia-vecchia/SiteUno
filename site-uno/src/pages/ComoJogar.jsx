import React from 'react';

const ComoJogar = () => {
  return (
    <div>
      <h1>Como Jogar UNO</h1>
      <p>UNO é um jogo de cartas simples e divertido. Aqui está um guia rápido sobre como jogar:</p>
      <ol>
        <li><strong>Distribuição:</strong> Cada jogador recebe 7 cartas. O restante das cartas forma o monte de compras.</li>
        <li><strong>Objetivo:</strong> Se livrar de todas as cartas na mão.</li>
        <li><strong>Jogo:</strong> Jogue uma carta que corresponda à cor ou ao número da carta no topo da pilha de descarte.</li>
        <li><strong>Carta Coringa:</strong> Pode ser jogada a qualquer momento e permite mudar a cor do jogo.</li>
        <li><strong>Carta +4:</strong> Pode ser jogada quando você não tem uma carta correspondente. O próximo jogador deve comprar 4 cartas e perder a vez.</li>
      </ol>
    </div>
  );
};

export default ComoJogar;