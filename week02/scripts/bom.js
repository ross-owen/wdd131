const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
li.textContent = input.value;

const deleteBtn = document.createElement('button')
deleteBtn.textContent = '❌'

li.appendChild(deleteBtn);
list.appendChild(li);
