let parent = document.querySelector('#btn-container')

parent.addEventListener('click', (e)=>{
    let btn_txt = e.target.innerText;
    let btn = e.target;

    switch (btn_txt){
        case "RED":
            btn.style.backgroundColor = 'red'
            console.log('red');
            break
        case "GREEN":
            btn.style.backgroundColor = 'green'
            console.log('green');
            break
        case "BLUE":
            btn.style.backgroundColor = 'blue'
            console.log('blue');
            break
        case "YELLOW":
            btn.style.backgroundColor = 'yellow'
            console.log('yellow');
            break
            
    }
    
})

const customUI = document.createElement('ul');

function responding(evt) {
    if (evt.target.nodeName === 'li')
        console.log('Responding')
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement('li');
    newElement.textContent = "This is line " + i;
    customUI.appendChild(newElement);
}

customUI.addEventListener('click', responding);

document.body.appendChild(customUI);
