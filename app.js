//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let qtdAmigos = 1;

let numeroAleatorio = sortearAmigo();

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if(nome != "") {
        listaDeAmigos.push(nome);
        exibirAmigosAdicionados('ul',nome);
        console.log(listaDeAmigos);
        qtdAmigos++;
    }
    else {
        alert("Campo vazio, Digite algum nome!");
    }
}

function exibirAmigosAdicionados(tag,nome) {
    const nomeItem = document.createElement('li');
    nomeItem.innerHTML = nome;
    
    const quebraLinha = document.createElement('br');
    nomeItem.appendChild(quebraLinha);

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.appendChild(nomeItem);
 }


