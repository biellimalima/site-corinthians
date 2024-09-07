function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (campoPesquisa === "") {
    return;
  }

  section.innerHTML = ""; // Limpa a seção

  const resultadosFiltrados = dados.filter(dado =>
    dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase())
  );

  if (resultadosFiltrados.length === 0) {
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Nenhum jogador encontrado.';
    mensagem.classList.add('mensagem-erro');
    section.appendChild(mensagem);
  } else {
    const fragment = document.createDocumentFragment();

    resultadosFiltrados.forEach(dado => {
      const div = document.createElement('div');
      div.classList.add('item-resultado');

      const h2 = document.createElement('h2');
      h2.textContent = dado.titulo;

      const p = document.createElement('p');
      p.textContent = dado.descricao;

      const linkDesempenho = document.createElement('a');
      linkDesempenho.href = dado.desempenho;
      linkDesempenho.target = "_blank";
      linkDesempenho.textContent = "Desempenho   ";

      const linkLances = document.createElement('a');
      linkLances.href = dado.lances;
      linkLances.textContent = "     Melhores momentos";
      linkLances.target = "_blank";

      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(linkDesempenho);
      div.appendChild(linkLances);

      fragment.appendChild(div);
    });

    section.appendChild(fragment);
  }
}