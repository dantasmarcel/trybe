// Desafio 11
function generatePhoneNumber(phone) {
  let telefone;
  let obj;
  if (phone.length !== 11) {
    obj = 'Array com tamanho incorreto.';
    return obj;
  }
  for (const number in phone) {
    if (phone[number] < 0 || phone[number] > 9) {
      obj = 'não é possível gerar um número de telefone com esses valores';
      return obj;
    }
  }

  telefone = phone;
  telefone = telefone.join('');
  telefone = '(' + telefone.slice(0, 2) + ') ' + telefone.slice(2, 7) + '-' + telefone.slice(7, 11);
  return telefone;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
