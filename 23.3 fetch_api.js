// Fetch api syntax 
/*
  fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    */

   // Working - A request is sent to the specified URL. 
   // -> The server processes the request and sends a response. 
   // -> The response is converted to JSON (or another format) using .json(). 
   // -> Errors are handled using .catch() or try-catch blocks.
   
   // Common http req methods
   // GET - fetches data from the api server
   // POST - requests to add some data on the server
   // PUT - to update data on the server
   // DELETE - remove some data from the server
   
   // simple fetch 
   fetch('https://fakestoreapi.com/products/1')
     .then(response => response.json()) //<- json() parses info body as JSON 
     .then(data => console.log(data))   // resloves promise
     .catch(error => console.error('Error:', error)); // catches any errors

// Response Status code handling 
fetch('https://api.example.com/data')
    .then(response => {
        if (response.ok) { //Checks if the HTTP response status is in the range of 200–299, indicating success.
            return response.json(); 
        } else {
            throw new Error('Network response was not ok'); 
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));


    // USING ASYNC AWAIT WITh FETCH

    async function getP() { //This defines an asynchronous function, meaning it can handle tasks like fetching data without blocking the rest of the program.
    try {
        const response = await fetch('https://fakestoreapi.com/products/21');
        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error); 
    }
}
getP()

