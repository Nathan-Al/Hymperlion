function route(handle, pathname, response) {
    console.log("Pathanme : " + pathname + ".");
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("aucun gestionnaire associé a " + pathname);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Non trouvé");
        response.end();
    }
}
exports.route = route;