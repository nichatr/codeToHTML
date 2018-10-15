
function getFile(filename)
1. read file
2. if html/js/ejs convert
3. wrap file content inside <pre><code class="language-XXXXX">...</code></pre>
4. return convertedData

function processOneFile()
1. add path/file name at the beginning
    remarks:
    path = the relative path of the app being converted.
    e.g.
    app.js
    views/index.html
    ...

function main()
1. get app path
2. forEach filename in path (recursively)
    content += processOneFile()
3. wrap resulting content inside
    <html>...<head>...<body>...
