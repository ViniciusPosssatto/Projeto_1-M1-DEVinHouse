
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
const btnComprar = document.getElementById('btn-comprar');

// Array dos produtos
var lista = [];

// funcao de adicionar item
function addItem() {
    // testa se existe algo escrito no campo  
    if (nomeProduto.value && qtdProduto.value && valorProdutos.value) {
        lista.push({            //insere um objeto com id/nome/qtde/valor no array
        id: Date.now(),  
        name: nomeProduto.value,
        quantidade: qtdProduto.value,
        valor: valorProdutos.value,
      });
      // reseta o valor do nome/qtdade/valor
      nomeProduto.value = '';
      qtdProduto.value = '';
      valorProdutos = '';
      // salva no storage
      saveStorage();
      // chama função tabela
      listaTabela();
    // } else {
    //     if(nomeProduto == ''){
    //         alert('Insira o nome de um item!');
    //     }if(qtdProduto == ''){
    //         alert('Insira a quantidade de itens!');
    //     }
    // }
    }
}

// busca lista no localStorage
var listaJSON = localStorage.getItem('lista');

    // verifica se tem algo do storage
    if (listaJSON) {
        // atualiza lista oficial e tela
        lista = JSON.parse(listaJSON);
        addItem();
        listaTabela();
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
        
        let tabela_check = cell.insertCell();
        let tabela_produto = cell.insertCell();
        let tabela_quantidade = cell.insertCell();
        let tabela_valor = cell.insertCell();
        let tabela_acao = cell.insertCell();

        tabela_check.innerHtml = checkbox;
        tabela_produto.innerText = lista[i].name;
        tabela_quantidade.innerText = lista[i].quantidade;
        tabela_valor.innerText = lista[i].valor;

        //cria o checkbox dentro da table
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 'value';
        checkbox.id = 'check';
        tabela_check.appendChild(checkbox);
        
        //cria o elemento imagem na table
        let imgDelete = document.createElement('img');
        imgDelete.src="/img/imagem-delete2.png";
        tabela_acao.classList.add('center');
        tabela_acao.appendChild(imgDelete);

        //addo evento de excluir o produto pelo id na imagem
        //imgDelete.setAttribute('onclick', removeProduto(lista[i].id))

        // imgDelete.onclick = function (id){
        //     var novaLista = [];
        //     lista.forEach(function (lista){
        //     if (lista.id !== id){
        //         novaLista.push('lista');
        //         }
        //     })
        // lista = novaLista;
        // };
        
    }
}

// objetivo de limpar a lista do local storage
function deletaLista(){
    localStorage.clear();
}


// adiciona evento de click no botao de adicionar
btnAddProd.addEventListener('click', addItem);

// adiciona evento de limpar o localStorage no botao de excluir
btnDeletarLista.addEventListener('click', deletaLista)

console.log(lista)


//addo evento de excluir o produto pelo id
function removeProduto (id) {
    var novaLista = [];
    lista.forEach(function (lista){
        if (lista.id !== id){
            novaLista.push(lista);
        }
    })
    lista = novaLista;
    //listaTabela();
}; 


function deletar(id){        
    
    let tabela = document.getElementById('tabela');

    for(let i = 0; i < lista.length; i++){

        if(lista[i].id == id){
           lista.splice(i, 1);
            tabela.deleteRow(i);
        }
    }
}