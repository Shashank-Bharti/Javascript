let grandParent = document.getElementById('grandparent')
let parent = document.getElementById('parent')
let child = document.querySelector('.child')

// Event Bubbling

        // grandParent.addEventListener('click',function(e){
          
        //     console.log("Grandparent Clicked")
        // })
        // parent.addEventListener('click',function(e){

        //     console.log("Parent Clicked")
        // })
        // child.addEventListener('click',function(e){
       
        //     console.log("Child Clicked")
        // })

// Avoid Event Bubbling

        // grandParent.addEventListener('click',function(e){
        //     e.stopPropagation()
        //     console.log("Grandparent Clicked")
        // })
        // parent.addEventListener('click',function(e){
        //     e.stopPropagation()
        //     console.log("Parent Clicked")
        // })
        // child.addEventListener('click',function(e){
        //     e.stopPropagation()
        //     console.log("Child Clicked")})

// Uses cases using Event delegation

grandParent.addEventListener('click', (event) => {
    console.log('Clicked:', event.target.id);
});