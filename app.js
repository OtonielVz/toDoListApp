const $input = document.getElementById('input');
const $sendButton = document.getElementById('send-button');
const $ul = document.querySelector('ul');
const $counter = document.querySelector('.counter');

let counterLi = 0;
const calls = $sendButton.addEventListener('click',(e)=>{
    e.preventDefault();
    const text = $input.value;
    $input.value = "";

   if(text.length <= 0){
        alert("El campo está vacio.");
        return;
    }
    else if(text.length <= 5){
        alert("La tarea es muy corta.");
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const p = document.createElement('p');
    p.textContent = text;

    $ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(span);
    span.textContent = 'Eliminar';

    counterLi++;
    updateCounter();
    


    span.addEventListener('click',(e)=>{
        const item = e.target.parentElement;
        $ul.removeChild(item);
        counterLi--;
        updateCounter();
    });
});

function updateCounter() {
    $counter.textContent = `Tienes: ${counterLi} tareas.`;
}
