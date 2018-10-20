const { settingsHTML } = require("./settingsHTML");
const fs = require('fs');

function writeFooter() {
    let footer = fs.readFileSync('footer.html');

    let filename = __dirname + `\\${settingsHTML.outputFilename}`
    fs.writeFile(filename, footer, { flag: 'a' }, (err) => {
        if (err) throw err;
    });
}

function writeFile1() {
    let data = fs.readFileSync('processFiles.js');
    let filename = __dirname + `\\${settingsHTML.outputFilename}`
    fs.writeFileSync(filename, data, { flag: 'w' });
};

writeFile1();
writeFooter();