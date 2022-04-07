
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
        valor: 0,
        status: false,
      });
      // reseta o valor do nome/qtdade/valor
      nomeProduto.value = '';
      qtdProduto.value = '';
      //valorProdutos = ''; 
      
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
    console.log(lista)
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
        checkbox.status = '';
        checkbox.id = 'check';
        tabela_check.appendChild(checkbox);
        //checkbox.checked = item.status;

        //função que captura true/false do check
        // function atualiza(){
        //         checkbox.onclick = event => {
        //             if(status == false){
        //                 valor = window.prompt("Digite o valor (R$)")
                   
        //                 if(!isNaN(valor) && valor > 0){
        //                     var produto = {
        //                         "id": id,
        //                         "nome": nome,
        //                         "quantidade": quantidade,
        //                         "valor": Number(valor),
        //                         "status": "checked",
        //                 }
        //                     // Muda-se valores do item.
        //                     lista.splice(i, 1, 0, produto)
        //                     saveStorage()
        //                     listaTabela()
        //                 }else{
        //                     alert("osadasas")
        //                 }
        //             }
        //         }
        //     }
        

        //atualiza();

        //cria o elemento imagem na table
        let imgDelete = document.createElement('img');
        imgDelete.src="/img/imagem-delete2.png";
        tabela_acao.appendChild(imgDelete);
        imgDelete.classList.add('imgDelet')
        
        //função para deletar os itens da tabela
        imgDelete.addEventListener("click", () =>{
            deletarProduto(i);
            saveStorage();
            listaTabela();
        });
    

        
       
    }
    
}
//função para deletar item pela imagem delete
function deletarProduto(i) {
    let tabela = document.getElementById('tabela-li');
    lista.splice(i, 1)
    tabela.deleteRow(i);


// objetivo de limpar a lista do local storage



// verifica se o produto está marcado/ se estiver marcado tem que executar a prox function
function checked(){
    lista.forEach(item => {
        if(item.status == false) {
            valor = janelaValor(janela_input);
                   
                        if(!isNaN(valor) && valor > 0){
                            lista.push({
                                'valor': valor,
                                'status': checked,
                            });
                        }
                            // Muda-se valores do item.
                            lista.splice(i, 1, 0, produto)
                            saveStorage()
                            listaTabela()
                        }else{
                            alert("osadasas")
                        }
                    }
                )};
            }
  
//total += item.valor * item.quantidade;

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


// aciona evento para aparecer a janela de valor
btnAddProd.addEventListener('click', () => {
    addItem();
    saveStorage();
    listaTabela();
});


// adiciona evento de limpar o localStorage no botao de excluir
btnDeletarLista.addEventListener('click', () => {
    if(confirm('Deseja realmente deletar a lista de produtos?')){
        localStorage.clear();
        location.reload();  // gambiarra funcional
        
    }
});


        