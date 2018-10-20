

var files = ['a', 'b', 'c'];


function processFiles(files) {
    if (files.length === 0) return;
    console.log(files.length);

    files.forEach(function (file) {
        console.log(file);
    });
    files.forEach((file) => {
        console.log(file);
    });


}

processFiles(files);