const arrayPostagens = [
    {
        titulo: "Pop Vegan",
        subtitulo: "Comida vegana para todos!",
        data: "06/07/2022",
        texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)",
    },
    {
        titulo: "Make Hommus. Not War",
        subtitulo: "Só delivery, para curtir em casa!",
        data: "18/08/2022",
        texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina.",
    },
    {
        titulo: "Churrascada do Mar",
        subtitulo: "Melhor do que estar na praia!",
        data: "30/08/2022",
        texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!",
    },
];


// - criar elemento
// - manipular o elemento
// - adicionar no DOM

// CRIAR UM ESTRUTURA DE REPETIÇÃO PARA MOSTRAR TODOS OS ELEMENTOS DO ARRAY NA TELA

for (let i = 0; i < arrayPostagens.length; i++) {
    // Criação do elemento
    const artigo = document.createElement("article");

    // Adicionando um id para o artigo
    artigo.id = "post-4";

    // Criação do elemento
    artigo.innerHTML = `
        <h3>${arrayPostagens[i].titulo}</h3>
        <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
        <div class="data">${arrayPostagens[i].data}</div>
        <p>${arrayPostagens[i].texto}</p>
    `;
    // Criação do elemento

    // Manipular o elemento
    const main = document.querySelector("main");
    // Manipular o elemento

    // Adicionar no DOM
    main.appendChild(artigo);
}

// Criação do array de categorias
const categorias = [
    "Vegano",
    "Churrascaria",
    "Japones",
    "Mexicano",
    "Nova categoria",
];

// Mapear o array , criando elemento por elemento
for (let i = 0; i < categorias.length; i++) {
    // Criando o elemento de categoria
    const categoria = document.createElement("button");

    // Adicionando um nome no botão
    categoria.innerHTML = categorias[i];

    // Procurando o pai do botão , no caso a div criada no html
    const listaCategorias = document.querySelector("#categorias-restaurante");

    // Adicionando o botão ao seu pai respectivo
    listaCategorias.appendChild(categoria);
}
