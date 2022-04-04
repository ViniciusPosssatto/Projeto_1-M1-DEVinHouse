
//campo input txt
let nomeProduto = document.getElementById('nome-produto');

//campos de input number
let qtdProduto = document.getElementById('qtd-produto');
let valorProdutos = document.getElementById('valor-produtos');

//buttons
const btnAddProd = document.getElementById('btn-adiciona');
const btnAdcValor = document.getElementById('btn-valor');
const btnDeletarLista = document.getElementById('deletar-itens');
const btnDeletarItens = document.getElementById('deletar-lista');

// Array dos produtos
var lista = [];

// funcao de adicionar item
function addItem() {
    // testa se existe algo escrito no campo  
    if (nomeProduto.value) {
      lista.push({            //insere um objeto com id/nome/qtde/valor no array
        id: Date.now(),  
        name: nomeProduto.value,
        quantidade: qtdProduto.value,
        valor: valorProdutos.value
      });
      // reseta o valor do campo/qtdade/valor
      nomeProduto.value = '';
      qtdProduto.value = '';
      valorProdutos = '';
      // atualiza a tela e salva no storage
     // updateScreen();
      saveStorage();
    } else {
      // aviso para campo vazio
      alert('Insira o nome de um item!');
    }
}

// busca lista no localStorage
var listaJSON = localStorage.getItem('lista');
  
// verifica se veio algo do storage
if (listaJSON) {
    // atualiza lista oficial e tela
    lista = JSON.parse(listaJSON);
    //updateScreen();
  }
// funcao de salvar no localStorage
function saveStorage() {
    var listaJSON = JSON.stringify(lista);
    // salva a lista
    localStorage.setItem('lista', listaJSON);
    }

  // adiciona evento de click no botao de adicionar
  btnAddProd.addEventListener('click', addItem);
  
  

  console.log(lista)
