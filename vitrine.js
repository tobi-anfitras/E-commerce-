const inputBusca = document.getElementById('input-busca');
const contador = document.getElementById('contador-carrinho');
const botoesComprar = document.querySelectorAll('.btn-comprar');
const cards = document.querySelectorAll('.produto-card');

let totalItens = 0;

//evento clique (adiciona ao carrinho...)
botoesComprar.forEach(botao =>{
        botao.addEventListener('click',() =>{
            totalItens++;

            contador.textContent = totalItens

            //feedbak visual
            botao.innerText = "adicionado"
            botao.style.backgroundColor = "#3CE024"

            setTimeout(()=>{
                    botao.innerText = "adicionado ao carrinho"
                    botao.style.backgroundColor = "#2ecc71"
            },1000);

        });


});

//filtro de busca
inputBusca.addEventListener('input',(e)=>{
    const termo = e.target.value.toLowerCase();
    
    cards.forEach(card =>{
        const nomeProduto = card.querySelector('h3').innerText.toLocaleLowerCase();

        if(nomeProduto.includes(termo)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }


    });



});

//seletor adicionais 

const listaCarrinho = document.getElementById('lista-carrinho');
const subtotalDisplay = document.getElementById('subtotal');
const selectfrete = document.getElementById('select-frete');
const foreCheackout = document.getElementById('form-checkout');
const notaFiscalArea = document.getElementById('nota-fiscal');

let itensCarrinho = [];

function atualizarcarrinho(){
    listaCarrinho.innerHTML = "";
    let soma = 0;

    itensCarrinho.forEach((item,index) =>{
        soma += item.preco;

        const li = document.createElement('li');
        li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}
        <button onclick="removerDoCarrinho(${index})">X</button>
        
        `;
        
        listaCarrinho.appendChild(li);

    });

    subtotalDisplay.textContent = soma.toFixed(2);
}
//vinculando aos botoes da vitrine

document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', (e)=>{
        const card = e.target.closest('.produto-card');
        const nome = card.querySelector('h3').innerText;
        const preco = parseFloat(card.querySelector('.preco').innerText.replace('R$','').replace('.','').replace(',','.'));

        itensCarrinho.push({nome,preco});
        atualizarcarrinho();
    })
});