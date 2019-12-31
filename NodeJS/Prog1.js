let http = require('http')
let fs = require('fs')
let url = require('url')
let EventListent = require('events')

let server = http.createServer()
server.on('request', (request, response) => {

    let query = url.parse(request.url, true).query
    if (query.name === undefined) {
        query.name = "George Lucas"
    }

    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
        }

        response.end(data)
    })
})

server.listen(8080)