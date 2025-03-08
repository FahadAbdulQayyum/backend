const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Fahad\'s World!');
})

app.get('/fahad', (req, res) => {
    res.send('Welcome to \'fahad\'s page!');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
})