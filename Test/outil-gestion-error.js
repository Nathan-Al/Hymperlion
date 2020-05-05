function basic(er) {
    let code = er.code;
    let name = er.__proto__.name;
    let message = er.message;
    let provenance = er.path;

    let ErRetur = {
        'code': code,
        'name': name,
        'message': message,
        'provenance': provenance
    }

    return new Error(ErRetur);
}