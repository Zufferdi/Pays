$(document).ready(function() {
    /* 
Deviner
*/

console.log('Bienvenue dans "devine la population du pays !"');

// but deviner pour 5 pays 

//choix aléatoire du pays

countries = [
    { nom: "Chine", pop: 1000, adj: "chinoise",},
    { nom: "Inde", pop: 900, adj: "indienne",},
    { nom: "UE", pop: 850, adj: "européenne",},
    { nom: "USA", pop: 800, adj: "américaine",},
    { nom: "Indonesie", pop: 600, adj:"indonésienne",},
    { nom: "Allemagne", pop: 100, adj:"allemande",},
]
    
var countryID= Math.floor(Math.random() * countries.length);

var country = countries[countryID].adj;



// boucle de 5 tours 

//var manche = 0;

//for (manche = 1; manche <= 6; manche++) {
    

   // for tour in tours {
    
var reponse = countries[countryID].pop
console.log(reponse)

    $(".resultat").hide()  
    
    $("#submit").on( 'click', function() {
        
        var difference = Math.abs($("#resultat").val() - reponse)
        console.log(difference)

            if (difference == reponse) {
                var resultat = "excellent !";
                var note = 100;
            } 
            else if (difference < 100) {
                var resultat = "presque bien joué !";
                var note = 50;
            } 
            else if (difference > 101) {
                var resultat = "encore un effort, tu en es loin.";
                var note = 0;
                            
            }
            console.log(note)
            return $(".resultat").text(resultat).show()  

        }
    )
    

   // }
//}
    

    
$("#country").text(country)
$(".resultat").text(resultat)    
    
}); 
