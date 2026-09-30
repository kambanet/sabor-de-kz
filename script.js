const botoes = document.querySelectorAll('.filtros button');
const itens = document.querySelectorAll('.galeria .item');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // 1. troca botão ativo
    botoes.forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');

    const filtro = botao.dataset.filtro;

    // 2. mostra/esconde
    itens.forEach(item => {
      const categorias = item.dataset.category;

      if (filtro === 'todos' || categorias.includes(filtro)) {
        item.classList.remove('hide');
        item.classList.add('show');
      } else {
        item.classList.add('hide');
        item.classList.remove('show');
      }
    });
  });
});
