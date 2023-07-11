// Validação de E-mail Crie uma função chamada validarEmail que recebe uma
//string como argumento e verifica se ela corresponde a um formato de e-mail válido. 
//Adicione essa função ao prototype da classe String.

String.prototype.validarEmail = function() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this);
  };
  
  const email1 = 'emersoncosta@gmail.com';
  console.log(email1.validarEmail());
  
  const email2 = 'email_invalido';
  console.log(email2.validarEmail());

// ^ e $ são âncoras que indicam o início e o fim da string, respectivamente. Isso significa que a expressão regular precisa corresponder à string completa.
// [^\s@]+ significa "um ou mais caracteres que não sejam espaços em branco ou @". Isso corresponde ao nome de usuário antes do símbolo @ no endereço de e-mail.
// @ é o próprio símbolo @.
// [^\s@]+ novamente significa "um ou mais caracteres que não sejam espaços em branco ou @". Isso corresponde ao domínio após o símbolo @.
// \. é o ponto literal (.) que separa o domínio de primeiro nível (TLD) do domínio de segundo nível (por exemplo, .com, .net, .org).
// [^\s@]+ mais uma vez significa "um ou mais caracteres que não sejam espaços em branco ou @". Isso corresponde à parte do TLD do endereço de e-mail.
// $ indica o final da string.
// A função test da expressão regular é usada para verificar se a string que invocou o método validarEmail corresponde ao padrão definido pela expressão regular.