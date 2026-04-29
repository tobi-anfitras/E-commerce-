const form = document.getElementById('form-login');
const btn = document.getElementById('btn-entrar');
const msgError = document.getElementById('mensagen-error');

form.addEventListener('submit',(e)=>{
    e.preventDefault(); //impede o carregamento da pagina

    //captura de valores via DOM
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    //simulação de loging
    btn.innerText = "verificando......";
    btn.style.backgroundColor = "#27c3e50";
    msgError.classList.add('hidden');

    setTimeout(()=>{
        //validação simples
        if(email === "admin@gmail.com" && senha === "123"){
            btn.style.backgroundColor = "#3CE024"
            btn.innerText = "Sucesso! Redirecionando...";

            setTimeout(()=>{
                window.location.href = "vitrine.html"
            },1000)

        }else{
            //manipulação do DOM para erro 
            btn.innerText = "Entrar";
            btn.style.backgroundColor = "#E11C17";
            msgError.classList.remove('hidden');
            msgError.style.color = "#E00918";
        }


    },1500);

});