const express = require('express');
const { appendFile } = require('fs');
const klawSync = require('klaw-sync');
const path = require('path');
const cors = require('cors');
const dummyTransactions = require('./constants/transactions.json');

let app = express()
app.use(cors());
app.options('*', cors());

app.get('/transactions', function(req,res) {
    res.send(dummyTransactions)
})

app.listen('3000', '0.0.0.0', async () => {
    console.log('Server listening on port 3000')
})

