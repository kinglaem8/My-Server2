const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const data = req.body;

    let existingData = [];
    if (fs.existsSync('data.json')) {
        existingData = JSON.parse(fs.readFileSync('data.json'));
    }

    existingData.push(data);

    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

    res.send("Infos reçues avec succès !");
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});