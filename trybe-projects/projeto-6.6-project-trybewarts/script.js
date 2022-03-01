const inputEmail = document.querySelector('#inputEmail');
const inputSenha = document.querySelector('#inputSenha');
const inputBotao = document.querySelector('#inputBotao');
const buttonCheckBox = document.querySelector('#submit-btn');
const inputCheckBox = document.querySelector('#agreement');

// validate form
function validateForm() {
    if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

inputBotao.addEventListener('click', validateForm);

function validateButton() {
    if (inputCheckBox.checked === true) {
        buttonCheckBox.disabled = false;
    }
}

inputCheckBox.addEventListener('change', validateButton);