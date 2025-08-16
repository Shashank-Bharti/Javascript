let hello_button = document.getElementById("hello")
let change_pic = document.getElementById("changepic")
let remove_text = document.getElementById("remove")
let h2 = document.querySelector("h2")
let img_add = document.querySelector("img")

let say_hello = () => {
    if (img_add.src == "https://cdn.animenewsnetwork.com/thumbnails/max600x400/cms/feature/169715/ram2.png.jpg"){
        h2.innerHTML = "Hello I'am Ram From RE:Zero"
        console.log('text has been added');
        
    }else {
        h2.innerHTML = "Hello I'am Rem From RE:Zero"
        console.log('text has been added');
    }
    console.log('hello fuction was called');

    
}

let remove_button = () => {
    if (hello_button && hello_button.parentNode) {
        hello_button.remove();
        hello_button = null; 
    }
    console.log('hello button is removed');
    
}

let add_button = () => {
    // Check if button doesn't exist in DOM
    if (!document.getElementById("hello")) {
        hello_button = document.createElement("button");
        hello_button.id = "hello";
        hello_button.textContent = "Say Hello";
        hello_button.addEventListener('click', say_hello);
        
        document.getElementById("cont2").appendChild(hello_button);
    }
    console.log('Hello button is added');
    
}

let change_picture = () => {
    if (img_add.src != "https://cdn.animenewsnetwork.com/thumbnails/max600x400/cms/feature/169715/ram2.png.jpg"){
        img_add.src = "https://cdn.animenewsnetwork.com/thumbnails/max600x400/cms/feature/169715/ram2.png.jpg"
        if (h2.innerHTML == ''){
        }else{
            say_hello()
            remove_button()
        }
    }else{
        img_add.src = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/11/rem-re-zero-featured.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
        if (h2.innerHTML == ''){
        }else{
            say_hello()
            remove_button()
        }
    }
    console.log('Picture is changed');
    
}


if (hello_button) {
    hello_button.addEventListener('click', say_hello)
}

change_pic.addEventListener('click', change_picture)

remove_text.addEventListener('click', function(){
    h2.innerHTML = ""
    add_button()
})
console.log('Parent Node - ');
let parent = document.getElementsByClassName("cont")
console.log( parent );
console.log('Child Nodes');
console.log(document.getElementsByClassName("cont")[0].children);

// DARK MODE


let toggle_btn = document.getElementById('mode') 
let elements_with_light_mode = document.querySelectorAll('.light-mode')


let toggle_mode = () => {
    elements_with_light_mode.forEach(element => {
        if (element.classList.contains('light-mode')) {
            element.classList.remove('light-mode');
            element.classList.add('dark-mode');
        } else {
            element.classList.remove('dark-mode');
            element.classList.add('light-mode');
        }
    });
    

    elements_with_light_mode = document.querySelectorAll('.light-mode, .dark-mode');
    console.log('Mode toggled');
}


toggle_btn.addEventListener('click', toggle_mode);

document.querySelectorAll()
