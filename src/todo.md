
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

1. command:  PS D:\_files\nic\development\web development\nic web-projects\codeToHtml\V04\src> node app.js
2. output:
        app-klaw.js
        app-readdirp.js
        app.js
        app.md
        basics.html
        \components\component1.js
        \components\component2.js
        \components\component3.js
        getFile.js
        readdirp_api.js
        readdirp_callback.js
        \reducers\reducer1.js
        \reducers\reducer2.js
        \tests\index.mjs
        \tests\lib.mjs

#H2 Embed bootstrap dropdown contents with links
1. read all pathnames and create the contents bootstrap dropdown in header.
    1. read header1.html into header var.
    2. for each pathname:
        1. create dropdown-item
        2. add to header var.
    3. read header2.html and add to header var.

2. write header.

3. read again all pathnames and process each.
    1. read header2.html once to get the template.
    2. replace id and value with filename.
