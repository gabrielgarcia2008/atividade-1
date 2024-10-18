function filtrarGenero(genero) {
    const container = document.getElementById('container-genero');
    container.innerHTML = ''; // Limpa os resultados anteriores

    // Exemplo de filmes/séries por gênero
    const filmesSeries = {
        acao: [
            { nome: 'Ação 1', imagem: 'https://via.placeholder.com/200x300' },
            { nome: 'Ação 2', imagem: 'https://via.placeholder.com/200x300' }
        ],
        aventura: [
            { nome: 'Aventura 1', imagem: 'https://via.placeholder.com/200x300' },
            { nome: 'Aventura 2', imagem: 'https://via.placeholder.com/200x300' }
        ],
        comedia: [
            { nome: 'Comédia 1', imagem: 'https://via.placeholder.com/200x300' },
            { nome: 'Comédia 2', imagem: 'https://via.placeholder.com/200x300' }
        ]
    };

    const selecionados = filmesSeries[genero];

    selecionados.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `<img src="${item.imagem}" alt="${item.nome}">
                         <p>${item.nome}</p>`;
        container.appendChild(div);
    });
}
