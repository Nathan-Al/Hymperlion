// exports.controller = function controller() {
    exports.Controller = async function Controller() {
        var fonctionController = [];
        console.log("Controll 404");

        fonctionController.Views = "../Views/affichage-404.ejs";

        return fonctionController;
    };