const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const dirPath = path.join(__dirname, '/constants/translations.json');
const translations = require('./constants/translations.json');

let app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.options('*', cors());

app.get('/translations', function(req,res) {
    res.send(translations)
})

app.post('/translations/add', function(req,res) {
    console.log(translations, req.body);
    const updatedTranslations = translations.map((item) => {
        if (item.id === req.body.id) {
            item.translate = req.body.translation
        }
        return item
    })
    fs.writeFile(dirPath, JSON.stringify(updatedTranslations), function writeJSON(err) {
        if (err) return console.log(err);
      });
})

app.listen('3000', '0.0.0.0', async () => {
    console.log('Server listening on port 3000')
})

