// 1º criar as variaveis - dizer para o JS quais elementos vamos manipular e armazena-los
let campoEmail = document.querySelector('#input-email');
let labelEmail = document.querySelector('#label-input-email');
let validEmail = false;

let campoSenha = document.querySelector('#input-senha');
let labelSenha = document.querySelector('#label-input-senha');
let validSenha = false;

let campoConfirmaSenha = document.querySelector('#input-confirma-senha');
let labelConfirmaSenha = document.querySelector('#label-input-confirm-senha');
let validConfirmaSenha = false;

let formularioCadastro = document.querySelector('#formulario-cadastro');
let botaocadastrar = document.querySelector('#btn-cadastrar');

//EVENTOS
campoEmail.addEventListener('keyup', verificaEmail);
campoSenha.addEventListener('keyup', verificaSenha);
campoConfirmaSenha.addEventListener('keyup', verificaConfirmaSenha);
formularioCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    verificaCampos();
});
botaocadastrar.addEventListener('click', verificaCampos);

//REGRAS REGEX PARA VALIDAÇÃO SENHA
//Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial:
let regSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


//FUNÇÕES
function verificaEmail(){
    if(campoEmail.value.length < 10){
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'E-mail: *Insira no mínimo 10 caracteres';
        campoEmail.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: red;');
        validEmail = false;
    
    }else{
        labelEmail.setAttribute('style', 'color: green');
        labelEmail.innerHTML = 'E-mail:';
        campoEmail.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: green;');
        validEmail = true;
    }
}

function verificaSenha(){
    let senhaValida = campoSenha.value.match(regSenha);
    console.log(senhaValida);
    
    if(campoSenha.value.length < 8 ){
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha: *Insira no mínimo 8 caracteres';
        campoSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: red;');
        validSenha = false;

    }else if(senhaValida === null){
        
        labelSenha.innerHTML = 'Senha: *Deve conter uma letra maiuscula e caracter'; 
        validSenha = false;
    
    }else{
        labelSenha.setAttribute('style', 'color: green');
        labelSenha.innerHTML = 'Senha:';
        campoSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: green;');
        validSenha = true;

        
    }
}

function verificaConfirmaSenha(){
    if(campoSenha.value !== campoConfirmaSenha.value){
        labelConfirmaSenha.setAttribute('style', 'color: red');
        labelConfirmaSenha.innerHTML = 'Confirme a Senha: *A senha digitada não corresponde';
        campoConfirmaSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: red;');
        validConfirmaSenha = false;

    }else{
        labelConfirmaSenha.setAttribute('style', 'color: green');
        labelConfirmaSenha.innerHTML = 'Confirme a Senha:';
        campoConfirmaSenha.setAttribute('style', 'display: block; margin-bottom: 15px; width: 415px; border-color: green;');
        validConfirmaSenha = true;
    }
}

function verificaCampos(){
    console.log(validEmail);
    console.log(validSenha);
    console.log(validConfirmaSenha);

    if(campoEmail.value === '' || campoSenha.value === ''  || campoConfirmaSenha.value === ''){
        alert('Algo deu errado! Por favor verifique se você preencheu todos os campos.');
        return
       
    }else if(!validEmail || !validSenha || !validConfirmaSenha){
        alert('Campos incorretos! Por favor verifique se você preencheu todos os campos.');
        return
        
    }else {
        alert('Conta criada com sucesso!');

        //salvar os dados localStorage
        console.log(campoEmail.value);
        console.log(campoSenha.value);
        console.log(campoConfirmaSenha.value);
    }
}