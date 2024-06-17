const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


function addChapter() {
    if (input.value.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = input.value;
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = '❌'
        deleteBtn.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        })
        
        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = '';
    }
    input.focus();
}

button.addEventListener("click", addChapter);
