// main.js
import {adicionarNaLista, getLista, limparLista} from "./lista.js";

const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosLista);
btnAdicionar.addEventListener('click', criaElementoNaLista);

atualizarItensDaLista();

function criaElementoNaLista(){
    const texto = pEntrada.textContent;
    adicionarNaLista(texto);
    atualizarItensDaLista();
    pEntrada.focus();
}

function limparElementosLista() {
    limparLista();
    atualizarItensDaLista();
}


function atualizarItensDaLista() {
    olSaida.innerHTML = "";
    const lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        olSaida.appendChild(li);
    }
}