//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let qtdAmigos = -1;

let numeroAleatorio = sortearAmigo();

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if(nome != "") {
        listaDeAmigos.push(nome);
            exibirAmigosAdicionados(nome);
        console.log(listaDeAmigos);
        qtdAmigos++;
    }
    else {
        alert("Por favor, insira um nome válido!");
    }
    nome = document.querySelector('input');
    nome.value = "";
}

function exibirAmigosAdicionados(nome) {
    const nomeItem = document.createElement('li');
    nomeItem.innerHTML = nome;
    
    const quebraLinha = document.createElement('br');
    nomeItem.appendChild(quebraLinha);

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.appendChild(nomeItem);
 }

 function sortearAmigo() {
    let nAleatorio = parseInt(Math.random() * qtdAmigos);
    let pessoaEscolhida;
    pessoaEscolhida = listaDeAmigos.at(nAleatorio);

    if(qtdAmigos > -1) {
    const listaDeAmigos = document.getElementById("listaAmigos");
        if (listaDeAmigos.parentNode) {
            listaDeAmigos.parentNode.removeChild(listaDeAmigos);
        }

    const nomeItem2 = document.createElement('li');
    nomeItem2.innerHTML = "O amigo secreto sorteado é: "+pessoaEscolhida;

    const resultado = document.getElementById("resultado");
    resultado.appendChild(nomeItem2);
    }
    
 }

