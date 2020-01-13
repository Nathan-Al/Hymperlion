var exec = require("child_process").exec;

function start(response) {
    console.log("Le gestionnaire 'start' est appelé.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Envoyer" />' +
        '</form>' +
        '</body>' +
        '</html>';
    /*exec("find /", { timeout: 10000, maxBuffer: 20000 * 1024 },
    function(error, stdout, stderr) {*/
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();

}

function upload(response) {
    console.log("Le gestionnaire 'upload' est appelé.");
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.write("Bonjour Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;