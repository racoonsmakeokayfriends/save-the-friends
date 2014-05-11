var sys = require('sys'),
    http = require('http'),
    fs = require('fs'),
    index_html, index_js , index_css;
 
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

fs.readFile('./save_the_friends.html', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    index_html = data;
});

 
fs.readFile('./save_the_friends.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    index_js = data;
});

 
fs.readFile('./save_the_friends.css', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    index_css = data;
});


http.createServer(function(request, response) {
    
    if (endsWith(request.url, 'html'))  {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.end(index_html);
    }
    if (endsWith(request.url, 'css'))  {
        response.writeHeader(200, {"Content-Type": "text/css"});
        response.end(index_css);
    }
    if (endsWith(request.url, 'js'))  {
        response.writeHeader(200, {"Content-Type": "text/javascript"});
        response.end(index_js);
    }
    //response.close();
    //res
}).listen(8000);