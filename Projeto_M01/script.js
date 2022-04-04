
//campo input txt
let nomeProduto = document.getElementById('nome-produto');

//campos de input number
let qtdProduto = document.getElementById('qtd-produto');
let valorProdutos = document.getElementById('valor-produtos');

//buttons
const btnAddProd = document.getElementById('btn-adiciona');
const btnAdcValor = document.getElementById('btn-valor');
const btnDeletarLista = document.getElementById('deletar-lista');
const btnDeletarItens = document.getElementById('deletar-itens');

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
      // salva no storage
      saveStorage();
      // chama função tabela
      listaTabela();
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

    //monta os itens na tabela
function listaTabela(){

    let tabela = document.getElementById('tabela-li');

    tabela.innerText = '';

    for(let i = 0; i < lista.length; i++) {

        let cell = tabela.insertRow();

        let tabela_id = cell.insertCell();
        let tabela_produto = cell.insertCell();
        let tabela_quantidade = cell.insertCell();
        let tabela_valor = cell.insertCell();
        let tabela_acao = cell.insertCell();

        tabela_id.innerText = lista[i].id;  // colocar o checkbox aqui
        tabela_produto.innerText = lista[i].name;
        tabela_quantidade.innerText = lista[i].quantidade;
        tabela_valor.innerText = lista[i].valor;

        //cria o elemento deletar clicando em uma imagem definida
        let imgDelete = document.createElement('img');
        imgDelete.src="/img/imagem-delete2.png";
        tabela_acao.classList.add('center');
        tabela_acao.appendChild(imgDelete);

        imgDelete.addEventListener("onclick", function deletarProduto(id){

            let tabela = document.getElementById('tabela-li');

            for(let i = 0; i < lista.length; i++){

            if(lista[i].id == id){
                //lista.splice(i, 1);
                tabela.deleteRow(i);
                }
        }
    
    });
        
    }
}

// function deletarProduto(id) {
        
//     if(confirm('Deseja realmente deletar o id: ' + id)){

//     let tabela = document.getElementById('tabela');

//     for(let i = 0; i < lista.length; i++){

//         if(lista[i].id == id){
//             lista.splice(i, 1);
//             tabela.deleteRow(i);
//             }
//         }
//     }
// }


function deletaLista(){
    localStorage.clear();
}


// adiciona evento de click no botao de adicionar
btnAddProd.addEventListener('click', addItem);
  
btnDeletarLista.addEventListener('click', deletaLista)

console.log(lista)
