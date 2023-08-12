const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
    const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Верный Gmail адрес'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Не корректный адрес Gmail'
        gmailResult.style.color = 'red'
    }
}




const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

function moveBlock(position) {
    if (position <= parentBlock.offsetWidth - childBlock.offsetWidth) {
        childBlock.style.left = position + 'px';
        setTimeout(() => moveBlock(position + 1), 10);
    } else {
        console.log("Движение завершено");
    }
}

moveBlock(0);
