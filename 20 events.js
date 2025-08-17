/*
Mouse Events: click, dblclick, mousemove, mouseover, mouseout
Keyboard Events: keydown, keypress, keyup
Form Events: submit, change, focus, blur
Window Events: load, resize, scroll
*/

document.addEventListener('DOMContentLoaded', function(){
    console.log('Loaded');
    
})

// Mouse events 

let button = document.querySelector('.btn')
let parent_div = document.querySelector('.container')

// document.addEventListener("mousemove", (e) => {
// console.log(`Mouse moved to (${e.clientX}, ${e.clientY})`)})

button.addEventListener('dblclick' , function(){
    console.log('Button was clicked twice');
    
})
parent_div.addEventListener('mouseover' , function(){
    console.log('Mouse was hovered');
    
})
button.addEventListener('click',() => [
    button.innerHTML = "I was Clicked"
])
// Keyboard Events
document.addEventListener('keydown' , (e) => {
    console.log(`${e.key} Key was Pressed`);
    
})
document.addEventListener('keyup' , (e) => {
    console.log(`${e.key} Key was Released`);
    
})
document.getElementById('inp1').value = "Text"
document.getElementById('inp1').addEventListener('change', () =>{
    console.log('Content was changed');
    
})

// Event Propagation
document.querySelector("div").addEventListener("click", () => {
    console.log("Div clicked");
}, true); // Capturing phase

button.addEventListener("click", (e) => {
    console.log("Button clicked");
    e.stopPropagation(); // Stops propagation
});

// Event Delegation
document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(`Clicked on item: ${e.target.textContent}`);
        e.target.style.color = 'violet'
    }
});
// Preventing Default Behaviour
button.addEventListener('click', function(e){
    e.preventDefault()
    
    console.log('Event Prevented');
    
    
})