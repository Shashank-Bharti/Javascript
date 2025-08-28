// GET

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST 

const data = { name: 'Shashank', age: 21 };
fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => console.log(result));
    
// PUT

const updatedData = { id: 1, price: 300 };

fetch('https://fakestoreapi.com/products/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(result => console.log(result));

// DELETE

fetch('https://fakestoreapi.com/products/1', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(result => console.log('Deleted:', result));

console.log(a);
var a = 10
