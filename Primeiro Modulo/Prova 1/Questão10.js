// API e JSON Utilizando uma API de sua escolha, faça uma requisição para obter dados sobre o clima de uma determinada cidade. 
// Em seguida, interprete a resposta JSON e exiba na tela informações relevantes sobre o clima, como temperatura, umidade e descrição.

let cidade = "Salvador";
let apiKey = "";
let url = `https://api.hgbrasil.com/weather${Salvador}`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    let temperatura = data.main.temp;
    let umidade = data.main.humidity;
    console.log("Temperatura: " + temperatura + "°C");
    console.log("Umidade: " + umidade + "%");
  });