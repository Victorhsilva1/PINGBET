function adicionarBilhete(jogo, odd) {
    const apostas = document.getElementById('apostas');
    const div = document.createElement('div');
    div.className = 'aposta';
    div.textContent = `${jogo} - Odd: ${odd}`;
    apostas.appendChild(div);
  }