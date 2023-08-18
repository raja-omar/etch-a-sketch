const ctn = document.querySelector('#ctn');
const btns = document.querySelectorAll('button');
const solid = document.querySelector('#s')
const rainbow = document.querySelector('#r')
const clear = document.querySelector('#c')

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    ctn.appendChild(div);
}

const boxes = document.querySelectorAll('.box');



function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}


function solidColor() {
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black'
        })
    })
}

function rainbowColor() {
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getRandomColor()
        })
    })
}

function clearGrid() {
    boxes.forEach(box => {
        box.style.backgroundColor = 'white'
    })
}

solid.addEventListener('click', solidColor)
rainbow.addEventListener('click', rainbowColor)
clear.addEventListener('click', clearGrid)

