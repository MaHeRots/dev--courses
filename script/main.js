var monchiffre = 2;

//Fonction pour calculer le carré d'un chiffre/nombre
var carre = function(x){
  return x*x;
};

var seize = carre(4);

//Exemple de Fonction sans chiffres
var direBonjour = function(prenom){
  return 'Bonjour ' + prenom
};

var test = direBonjour('Célia');

//affichage dans la console
console.log(test);

//entre '' tout ce qui n'est pas chiffre ou variable
var montitre = document.querySelector('h1');
console.log(montitre);
montitre.textContent = 'HELLO ECV B3';

var mesdivs = document.querySelectorAll('.test');

for (var i = 0 < mesdivs[i])
