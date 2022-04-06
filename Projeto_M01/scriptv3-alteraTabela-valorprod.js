
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
    if (nomeProduto.value) {
        lista.push({            //insere um objeto com id/nome/qtde/valor no array
        id: Date.now(),  
        name: nomeProduto.value,
        quantidade: qtdProduto.value,
        //valor: valorProdutos.value,
        status: false,
      });
      // reseta o valor do nome/qtdade/valor
      nomeProduto.value = '';
      qtdProduto.value = '';
      //valorProdutos = '';
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
        let tabela_acao = cell.insertCell();


        tabela_produto.innerText = lista[i].name;
        tabela_quantidade.innerText = lista[i].quantidade;
      
        

        //cria o checkbox dentro da table
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        tabela_check.appendChild(checkbox);
        //checkbox.checked = item.status;


        
        //cria o elemento imagem na table
        let imgDelete = document.createElement('img');
        imgDelete.src="/img/imagem-delete2.png";
        tabela_acao.appendChild(imgDelete);
        imgDelete.classList.add('imgDelet')
        
        //tabela_acao.setAttribute('click', "deletar("+lista[i].id+")");
        //add evento de excluir o produto pelo id clicando na imagem
        imgDelete.setAttribute('click', deletar(lista[i].id));

        // função deletar item pelo ID
        function deletar(i, id){
            let tabela = document.getElementById('tabela-li')
            for(i = 0; i < lista.length; i++){
                if(lista[i].id == id){
                    lista.splice(i, 1);
                    //tabela.deleteRow(i);
                    //lista.deleteItem(i)
                }
            }
        };
       
        // function removeItem(id){
        //     var novaLista = [];
        //     lista.forEach(function (item,id) {
        //     if (item.id !== id){
        //         novaLista.push(item);
        //         }
        //     })
        //     lista = novaLista;
        //     listaTabela();
        // };
        // console.log(imgDelete)


        // imgDelete.addEventListener('onclick', function deletar(id){        
        //     var novaLista = [];
        //     for(let i = 0; i < lista.length; i++){
        
        //     if(lista[i].id !== id){
        //         novaLista.push(item);
        //         }
        //     }
        //     lista = novaLista;
        //     console.log(lista)
        // });

        // imgDelete.addEventListener('onclick', function deletar(id){
        //     let tabela = document.getElementById('tabela-li')
        //     for(let i = 0; i < lista.length; i++){
        //         if(lista[i].id == id){
        //             lista.splice(i, 1);
        //             tabela.deleterow(i);
        //         }
        //     }
        // });

        
        
    }
}







// objetivo de limpar a lista do local storage
function deletaLista(){
    let tabela = document.getElementById('tabela-li');
    if(confirm('Deseja realmente deletar a lista de produtos?')){
        localStorage.clear();
        tabela.innerHtml = '';  //testar isso
    }
    
    listaTabela()
    addItem()
}
 



// verifica se o produto está marcado/ se estiver marcado tem que executar a prox function
function checked(item){
    lista.forEach(item => {
        if(item.status == checked){
            return item.status = true;
        }
            if(item.status == true){
                console.log(total += item.valorProdutos * item.qtdProduto)
                janelaValor(janela_input)
        }
    })
}


//add função pra janelaValor aparecer na tela e atribui evento para o botao inserir


/////// alterar aqui para quando o item estiver checked ele executar esse codigo
function janelaValor(janela_input){
    const janelaValor = document.getElementById(janela_input);
    janelaValor.classList.add('janela_input');
    btnAdcValor.addEventListener('click', function () {
        if(valorProdutos.value){
            janelaValor.classList.remove('janela_input');
            
        }
        // addItem();
        // listaTabela();
    });
}


// //addo evento de excluir o produto pelo id
// function removeProduto(id) {
//     var novaLista = [];
//     lista.forEach(function (item){
//         if (item.id !== id){
//         novaLista.push(item);
//         }
//     })
//     lista = novaLista;
//     //console.log(lista);
// }; 






// aciona evento para aparecer a janela de valor
btnAddProd.addEventListener('click', addItem);


// adiciona evento de limpar o localStorage no botao de excluir
btnDeletarLista.addEventListener('click', deletaLista)

console.log(lista)
