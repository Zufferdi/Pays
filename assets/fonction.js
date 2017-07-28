/* 
Deviner
*/

console.log('Bienvenue dans "devine la population du pays !"');

// 5 pays à deviner

//choix aléatoire du pays

countries = [
    { nom: "Chine", pop: 1000, adj: "chinoise",},
    { nom: "Inde", pop: 900, adj: "indienne",},
    { nom: "UE", pop: 850, adj: "européenne",},
    { nom: "USA", pop: 800, adj: "américaine",},
    { nom: "Indonesie", pop: 600, adj:"indonésienne",},
]

var countryID= Math.floor(Math.random() * countries.length);


var country = countries[countryID].adj;

// boucle de 5 pays 

//var compteur = 0;
//for (compteur = 1; compteur <= 6; compteur++) {
    //population = Number

var user_answer = prompt ("Essayez de deviner la population " + country);
   
//}
    var reponse = countries[countryID].pop
    var difference = Math.abs(user_answer-reponse)
        if (difference == reponse) {
            prompt("excellent!");
        } 
        if (difference > 100) {
             prompt ("presque bien joué!");
        } 
        else if (difference > 101) {
            prompt("encore un effort, tu en es loin");
        }

       
    
        
    












