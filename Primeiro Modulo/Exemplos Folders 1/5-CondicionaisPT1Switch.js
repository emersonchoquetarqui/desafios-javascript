let mes = 5;
let nomeMes;

switch (mes) {
  case 1:
    nomeMes = "Janeiro";
    break;
  case 2:
    nomeMes = "Fevereiro";
    break;
  case 3:
    nomeMes = "Março";
    break;
  case 4:
    nomeMes = "Abril";
    break;
  case 5:
    nomeMes = "Maio";
    break;
  case 6:
    nomeMes = "Junho";
    break;
  default:
    nomeMes = "Mês inválido";
}

console.log("O mês correspondente ao número", mes, "é", nomeMes);
