// Inputs
const newItem = document.getElementById("new-item");
const trash = document.getElementsByClassName("trash-can");
const checkBox = document.getElementsByClassName("checkbox");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
// Removed Item
const removedItem = document.getElementsByClassName("removed-item");
const itemList = document.querySelector("li");

// Função que adiciona o conteúdo do input na lista.
function addNewItem(){
  // Seleciona a lista
  const list = document.querySelector(".items-list");

  // Cria o elemento <li>
  const novoItem = document.createElement("li");

  // Cria o input
  const novoInput = document.createElement("input");
  novoInput.type = "checkbox"
  novoInput.classList.add("checkbox");

  // Cria o texto com conteúdo do input
  const textoItem = document.createTextNode(newItem.value);

  // Cria a imagem
  const novaImagem = document.createElement('img');
  novaImagem.classList.add('trash-can');
  novaImagem.src = 'assets/trash.svg';

  // Monta a estrutura: input + texto + imagem dentro do li
  novoItem.appendChild(novoInput);
  novoItem.appendChild(textoItem);
  novoItem.appendChild(novaImagem);

  // Adiciona o <li> na lista
  list.appendChild(novoItem);

  // Limpa conteúdo do input
  newItem.value = "";
}

// Capturar o evento de submit do formulário
form.onsubmit = (e) => {
  e.preventDefault()

  addNewItem()
}

// Capturar o evento de clique na lixeira.
const list = document.querySelector(".items-list");

list.addEventListener("click", (event) => {
  // Verifica se clicou numa lixeira
  if (event.target.classList.contains("trash-can")) {
    const li = event.target.parentElement;
    li.remove();

    document.querySelector(".removed-item").style.display = "flex";
  }
});

// Fecha o aviso que o item foi removido
closeBtn.addEventListener("click", () => {
  document.querySelector(".removed-item").style.display = "none";
})

