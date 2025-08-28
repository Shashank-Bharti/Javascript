
fetch('http://localhost:3000/test-api', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-secret-token',
        'Custom-Header': 'HelloWorld'
    },
    body: JSON.stringify({ message: 'Hello API!' })
})
.then(response => response.json())
.then(data => console.log('Response:', data))
.catch(error => console.error('Error:', error));