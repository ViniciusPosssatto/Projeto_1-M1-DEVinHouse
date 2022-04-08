# Módulo 01 -> Projeto 01 
<h2>Enunciado</h2>
<p>     Você está participando de um processo seletivo para ingressar em uma vaga de programador
em uma grande empresa de TI. Uma das etapas do processo envolve a criação de uma
aplicação web para controle e cálculo de uma lista de compras.</p>

<h3>Objetivos</h3>
<p>Colocar em prática o conteúdo visto nas aulas:</p>

- HTML: principais tags como head, meta, title, body, div, h1, form, input, button, ul, li. Atributos de tags como class, id, type. Inclusão de arquivos de estilos (css) e de script (js) na página.

- CSS: estilizar a página, os botões, inputs, alterar atributos dos elementos da tela de acordo com a interação do usuário para uma melhor experiência do usuário (UX).

- Javascript: variáveis, arrays, funções, manipulação do DOM (eventos, elementos e seus atributos), manipular objetos (JSON), utilizar o localStorage.

<p>Seguindo os atributos requisitados foi realizado a criação de uma página com uma lista de compras interativa e dinâmica.</p>
<p>A página contém elementos essenciais para seu funcionamento, visualização e interatividade.</p>
<h4>Um pouco da página</h4>
<p>
Foi construída com base nos elementos do HTML5, CSS3 e JavaScript(JS). Utilizando o GitHub para fazer o versionamento através de uma branch Main e uma branch local, foi criado a base do site em HTML com seus principais itens a serem atribuídos funcionalidades pelo JS. A cada execução correta ou próximo ao esperado, iam sendo feitos commits na branch local para que a alteração ficasse salva e assim seguir alterando para se caso desse algo de errado ter como reverter. Cada commit possui um título intuitivo e uma descrição mais detalhada do que foi realizado.</p>

<h3>Das funções e interações</h3>
<p>
    
- Produto = cada produto é adicionado com o formato de objeto em um array chamado lista. Cada objeto possui as propriedades id, nome, quantidade, valor e status.
    
- AddItem = função que captura as informações colocadas nos campos nome de produto e quantidade através do clique no botão adicionar.
    
- Id = foi utilizado o Date.now() para atribuição de id's específicos e não repetíveis para os objetos. 
    
- SaveStorage = armazena o array com seus objetos no LocalStorage do navegador.
    
- ListaTabela = função responsável por montar a tabela na tela do Html. Ela também é responsável por criar o checkbox e a imagem para deletar o item, assim como inserir estes juntamente com o nome, quantidade e valor dos objetos em uma linha na tabela.
    
- Checkbox = define que um item foi comprado. No momento em que for marcado ele requisita um prompt que pede para o usuário colocar o valor que foi pago pelo item. Assim que o usuário der Ok o valor do item entra no objeto definido através de seu ídice no array, seu status muda para true e consecutivamente aparece na tabela com um risco por cima do item. Os itens marcados são contabilizados no cálculo do valor total do item (valorProduto * qtdadeProduto) e após somados os valores são inseridos na tela abaixo da tabela.
    
- Modal = foi adicionado um modal no lugar do prompt para a captura do valor do item, porém, houve alguns problemas na sua execução sendo deixado de lado para ser tratado mais adiante. 
    
- imgDelete = pelo evento de click, executa a função deletaProduto e elimina um objeto da lista através do seu índice no array. Após eliminada da lista, chama a função saveStorage e listaTabela para atualizar o localStorage e a tabela.
    
- deletaLista = botão que executa a limpeza do localStorage e exclui os objetos da tabela.
    
- deletaProduto = botão que deleta os itens da lista marcados como comprados. Retira eles do array e atualiza a tabela.
    
- Outros elementos = colocado uma navbar com alguns itens e um footer para dar uma aparência mais característica de uma página. Implementado um logo do DevinHouse ao lado da barra. 
    
- Css = alguns detalhes principais são: foi centralizado o header e a tabela para ficarem mais destacadas no centro da página. Utilizado fonte, tamanho e cores que facilitam a visualização e leitura. Colocado uma imagem de backgroud para não ficar uma cor monótona e ficar mais bonita/chamativa.
    
- Css Tabela = a tabela se ajusta de acondo com o tamanho do nome ou valor do item e ela literalmente quebra os cantos da página tendo que rolar para o lado para ver o restante dos itens da tabela. Quando adicionado muitos itens também ocorre um problema de a imagem de fundo chegar ao fim e iniciar outra ficando aquela divisão nítida de cores entre elas.</p>


<h3>Conclusão</h3>

<p>O projeto seguiu muito bem os assuntos tratados em aula, colocando a prova nosso aprendizado. Embora o início da construção da página foi relativamente fácil e rápida, algumas definições de funções e eventos de botão deram bastante trabalho e dor de cabeça. Depois de muita pesquisa, revisão de conteúdo e ajuda dos colegas e professores, enfim conquistado os requisitos principais do projeto.</p>
<p>Entretando não está finalizado, voltarei a rever ele para ajustes futuros e adicionar mais funções desejadas, como o modal para a captura do valor do item.</p>
<p>Como consideração final, gostei muito do desafio e de poder colocar em prática o que aprendi durante esse módulo do curso. É ai que você percebe o quanto está evoluíndo e  também o quanto ainda precisa aprender, porém, reconhece os esforços que está fazendo. 
Com muita determinação sigo buscando sempre aumentar meus conhecimentos e melhorar minhas skills para os próximos desafios.</p>
