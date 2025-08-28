const express = require('express');

const app = express();

app.use(express.json());

app.post('/test-api',(req,res) => {
    console.log('Received Headers', req.headers);
    console.log('Received Body', req.body);
    res.json({message : "Headers Received successfully", receivedheaders : req.headers})
    
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Running On Host: http://localhost:${PORT}`);
    
})