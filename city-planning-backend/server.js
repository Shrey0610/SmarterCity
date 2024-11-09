const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('Hello World');
    })
 

app.get('/api', (req, res) => {
    res.json({"users":['user1', 'user2', 'user3', 'user4']});
    })


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    })