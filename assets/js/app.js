let input = document.querySelector('input');
let buttonAdd = document.getElementById('add');
let pai = document.getElementById('ulAtividades');
let pai_2 = document.getElementById('ulRemocao');

buttonAdd.addEventListener('click', function(e) {
    e.preventDefault();
    let addAtividade = document.createElement('li');
    addAtividade.textContent = input.value;
    pai.appendChild(addAtividade);
    let addLi = document.createElement('li');
    pai_2.appendChild(addLi);
    let addButtonRemover = document.createElement('button');
    addButtonRemover.textContent = 'Remover';
    addButtonRemover.id = 'remover';
    addLi.appendChild(addButtonRemover);
});