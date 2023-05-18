// Importar a biblioteca que use o protocolo http e URL
const http = require('http');
const url  = require('url');
const fs   = require('fs');

function readFile(response, file) {
    fs.readFile(file, function(err, data) {
        response.end(data);
    });
}

// Criar uma função para trabalhar no servidor
var callback = function (request, response) {
    var parts = url.parse(request.url);
    var path  = parts.path;
    
    if (parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/index.html");
    } else if (parts.path == "/rota1"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/contato.html");
    } else if (parts.path == "/rota2"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/produto.html");
    } else if (parts.path == "/rota3"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/catalogo.html");
    } else if (parts.path == "/rota4"){
        response.writeHead(200, {"Content-type": "application/msword"});
        readFile(response, "recursos/arquivo.docx");
    } else if (parts.path == "/rota5"){
        response.writeHead(200, {"Content-type": "image/jpeg"});
        readFile(response, "recursos/arquivo.jpg");
    } else if (parts.path == "/rota6"){
        response.writeHead(200, {"Content-type": "audio/mp3"});
        readFile(response, "recursos/arquivo.mp3");
    } else if (parts.path == "/rota7"){
        response.writeHead(200, {"Content-type": "video/mp4"});
        readFile(response, "recursos/arquivo.mp4");
    } else if (parts.path == "/rota8"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "recursos/arquivo.json");
    } else if (parts.path == "/rota9"){
        response.writeHead(200, {"Content-type": "text/md"});
        readFile(response, "recursos/arquivo.md");
    } else {
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "views/404.html");
    }
};

// Criar o servidor ------------------------------------------------------------
var server = http.createServer(callback)
server.listen(3000);
console.log("[SERVER - OK] ... Servidor montado em http://localhost:3000");

