var animal = "gato";
var som;

switch (animal) {
  case "cachorro":
    som = "Au au!";
    break;
  case "gato":
    som = "Miau!";
    break;
  case "vaca":
    som = "Muuu!";
    break;
  case "leão":
    som = "Rugido!";
    break;
  default:
    som = "Som desconhecido";
}

console.log("O animal", animal, "faz", som);
