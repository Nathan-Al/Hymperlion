
var Matronna = "Matronna"

console.log(Matronna);

var Eleve = function (nom)
{
    this.nom = nom
}

Eleve.prototype.moyenne = function ()
{
    var somme = 0
    this.notes.forEach(function (note, index)
    {
        somme += this.notes[index]
    }, this)
    return Math.round(somme / this.notes.length)
}

var jean = new Eleve ('Jean')
jean.notes = [10,15]

var liens = document.querySelectorAll('a.liensjavascript')
for(var i = 0 ; i < liens.length; i++)
{
    var lien = liens[i]
    lien.addEventListener('click', function (e)
    {
        console.log("J'ai cliqué sur le liens", e)
        var reponse = window.confirm('Etes vous sur ?')
        if(repnse == false)
        {
            e.preventDefault()
        }
    })
}

/*
var Perso = function (nom){
    this.nom = nom
}

class Mama {

    nom = ''
    age = 0
    constructor (nom, age)
    {
        this.nom = nom
        this.age = age
    }
}

perso.prototype.moyenne = function ()
{
    return 10
}

var jean = new Perso ('Jean')
var marc = new Perso ('Marc')*/