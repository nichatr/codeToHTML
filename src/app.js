'use strict';
const express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// const readAllFilesAPI = require('./readdirp-stream');
const readAllFilesAPI = require('./readdirp-callback-promisify');
const processFiles = require('./processFiles');
const { settingsHTML } = require("./settingsHTML");

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    let root = req.body.root;
    let outputFile = req.body.outputFile;
    let appTitle = req.body.appTitle;

    settingsHTML.root = root;
    settingsHTML.outputFilename = outputFile;
    settingsHTML.appTitle = appTitle;

    readAllFilesAPI(processFiles, settingsHTML.root);
    res.redirect('/');
});


var port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log('Server codeToHTML started');
});
