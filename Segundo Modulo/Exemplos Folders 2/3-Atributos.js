// exemplo 1
/* <div id="myDiv" data-user-id="123" data-role="admin"></div>

const myDiv = document.getElementById('myDiv');
const userId = myDiv.dataset.userId;
const role = myDiv.dataset.role;

console.log(userId);
console.log(role); */

// exemplo 2
/* <button data-product-id="456">Adicionar ao carrinho</button>

const button = document.querySelector('button[data-product-id]');
button.addEventListener('click', function() {
  const productId = this.dataset.productId;
  console.log('Produto adicionado ao carrinho:', productId);
}); */

// exemplo 3
/* <input type="text" aria-label="Campo de busca" /> */

// exemplo 4
<div id="myDiv4" data-info='{"name": "John", "age": 30}'></div>

const myDiv4 = document.getElementById('myDiv4');
const info = JSON.parse(myDiv4.dataset.info);
console.log(info.name);
console.log(info.age);

// exemplo 5
/* <p id="myParagraph" style="color: blue;">Texto inicial</p>

const myParagraph = document.getElementById('myParagraph');
myParagraph.style.color = 'red';
myParagraph.style.fontSize = '20px'; */
