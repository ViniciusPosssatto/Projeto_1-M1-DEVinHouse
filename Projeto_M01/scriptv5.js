
//campo input txt
let nomeProduto = document.getElementById('nome-produto');
let valorTotal = document.getElementById('total-produtos');

//campos de input number
let qtdProduto = document.getElementById('qtd-produto');
let valorProdutos = document.getElementById('valor-produtos');

//buttons
const btnAddProd = document.getElementById('btn-adiciona');
const btnAdcValor = document.getElementById('btn-valor');
const btnDeletarLista = document.getElementById('deletar-lista');
const btnDeletarItensMarcados = document.getElementById('deletar-itens');

//campo checkbox
const checar = document.getElementById('check1');


// Array dos produtos
var lista = [];


// funcao de adicionar item
function addItem() {
    // testa se existe algo escrito no campo  e insere um objeto com id/nome/qtde/valor no array
    if (nomeProduto.value && qtdProduto.value) {
        lista.push({            
        id: Date.now(),  
        name: nomeProduto.value,
        quantidade: qtdProduto.value,
        valor: 0,
        status: false,
      });
     } //else {
    //     alert('Digite o nome e o valor do produto!')
    // }
    // reseta o valor do nome/qtdade
      nomeProduto.value = '';
      qtdProduto.value = ''; 
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



//chama o prompt para inserir o valor e substitui o valor e o status do objeto
function checked(id, name, quantidade, status, i){
          
    if(status == false) {
        
        valor = window.prompt('Digite o valor do produto:');
          
        if(Number(valor)){
            
            var produto = {
                "id": id,
                "name": name,
                "quantidade": quantidade,
                "valor": Number(valor),
                "status": true,
                }

            lista.splice(i, 1, produto)
            saveStorage()
            listaTabela()
        }
    }
    else {
        
        var produto = {
            "id": id,
            "name": name,
            "quantidade": quantidade,
            "valor": 0,
            "status": false,  
        }
    
        lista.splice(i, 1, produto)
        saveStorage()
        listaTabela()
    }
}

// adiciona função para deletar os itens que estiverem marcado no checkbox
btnDeletarItensMarcados.addEventListener('click', () => {
    for(let i = lista.length -1; i >= 0; i--){
        if(lista[i].status !== false){
            deletarProduto(i)
            saveStorage()
            listaTabela()
        }
    }
})


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

        tabela_valor.innerText = lista[i].valor;
        tabela_produto.innerText = lista[i].name;
        tabela_quantidade.innerText = lista[i].quantidade;
      
        //cria o checkbox dentro da table
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.status = 'false';
        checkbox.id = 'check1';
        cell.style.textDecoration = lista[i].status ? 'line-through' : "";   //risca a linha marcada 
        checkbox.checked = lista[i].status ? "checked" : "";
        checkbox.onclick = () => {
            checked(lista[i].id, lista[i].name, lista[i].quantidade, lista[i].status, i)
            saveStorage();
            listaTabela();
        };
        tabela_check.appendChild(checkbox);
       
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
    
    // capturando os valores, multiplicando e somando para apresentar
    
    const getTotal = i => i.quantidade * i.valor
    const somar = (acc, el) => acc + el

    const total = lista.map(getTotal).reduce(somar);
    //console.log(total)
    valorTotal.innerText = `O valor total dos produtos é: R$ ${total}`

    }
    
}


//função para deletar item pela imagem delete
function deletarProduto(i) {
    let tabela = document.getElementById('tabela-li');
    lista.splice(i, 1)
    tabela.deleteRow(i);
}

/////// alterar aqui para quando o item estiver checked ele executar esse codigo
function janelaValor(janela_input){
    const janelaValor = document.getElementById(janela_input);
    janelaValor.classList.add('janela_input');
    btnAdcValor.addEventListener('click', function () {
        if(valorProdutos.value){
            janelaValor.classList.remove('janela_input');
            
        }
        addItem();
        listaTabela();
    });
}

// aciona evento para adicionar produto na table
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






// Formata string para valor monetário  -- by Marcelo e Maycon
function formataValor(valorTotal){
    var valorFormatado = valorTotal;

    return valorFormatado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
};
