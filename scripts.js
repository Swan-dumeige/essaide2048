alert("Bonjour!")
/*
document.onkeydown = function(e) {
    var x = 1;
    switch (e.keyCode) {
        case 37:

            document.getElementById("tableau").rows[1].cells[0].innerHTML = "gauche";                
            break;

        case 38:
            document.getElementById("tableau").rows[1].cells[1].innerHTML = "haut";

        case 39:

            document.getElementById("tableau").rows[2].cells[2].innerHTML = "droite";

            break;
        case 40:
            document.getElementById("tableau").rows[3].cells[3].innerHTML = "bas";
            break;
    }
};
*/  
/*
function intervertirCellule(ligne1, cellule1, ligne2, cellule2)
{
    //on récupère les données 
    var contenu1 = document.getElementById("tableau").rows[ligne1].cells[cellule1].innerHTML;//on copie le contenu de la cellule 1
    var contenu2 = document.getElementById("tableau").rows[ligne2].cells[cellule2].innerHTML;//on copie celui de la cellule 2
    
    //on remplace
    document.getElementById("tableau").rows[ligne1].cells[cellule1].innerHTML = contenu2;
    document.getElementById("tableau").rows[ligne2].cells[cellule2].innerHTML = contenu1;//on intervertit les contenus
};

document.onkeypress = function ajout(ligne1, cellule1, ligne2, cellule2, ligne3, cellule3 )
{
    document.getElementById("tableau").rows[ligne3].cells[cellule3].innerHTML = spareInt(document.getElementById("tableau").rows[ligne1].cells[cellule1].innerHTML ) +  spareInt(document.getElementById("tableau").rows[ligne2].cells[cellule2].innerHTML );               

};
*/
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



document.onkeydown = function popChiffres(e,ligne, cellule)
{

    
    switch (e.keyCode) {
        case 37:
            for (var k = 0; k <3; k++){
            for (var i=3; i<7; i++){ 
                for (var j=3; j<7; j++){ 


                    if (document.getElementById("tableau").rows[i].cells[j].innerHTML !== "")

                        {
                        if (document.getElementById("tableau").rows[i].cells[j+1].innerHTML !== "")
                         {
                            if (document.getElementById("tableau").rows[i].cells[j+1].innerHTML == document.getElementById("tableau").rows[i].cells[j].innerHTML){
                                document.getElementById("tableau").rows[i].cells[j].innerHTML = 2*(document.getElementById("tableau").rows[i].cells[j+1].innerHTML);
                                document.getElementById("tableau").rows[i].cells[j+1].innerHTML = "";
                            }
                            if (document.getElementById("tableau").rows[i].cells[j+2].innerHTML !== ""){
                                if (document.getElementById("tableau").rows[i].cells[j+2].innerHTML == document.getElementById("tableau").rows[i].cells[j+1].innerHTML){
                                document.getElementById("tableau").rows[i].cells[j+1].innerHTML = 2*(document.getElementById("tableau").rows[i].cells[j+2].innerHTML);
                                document.getElementById("tableau").rows[i].cells[j+2].innerHTML = "";
                            }
                            i++
                            }
                            else{
                                    document.getElementById("tableau").rows[i].cells[j+2].innerHTML  = document.getElementById("tableau").rows[i].cells[j+3].innerHTML;
                                    document.getElementById("tableau").rows[i].cells[j+3].innerHTML = "";
                            }
                         }
                        else {

                            document.getElementById("tableau").rows[i].cells[j+1].innerHTML  = document.getElementById("tableau").rows[i].cells[j+2].innerHTML;
                            document.getElementById("tableau").rows[i].cells[j+2].innerHTML ="";
                        }
                    }
                    else{

                        document.getElementById("tableau").rows[i].cells[j].innerHTML  = document.getElementById("tableau").rows[i].cells[j+1].innerHTML;
                        document.getElementById("tableau").rows[i].cells[j+1].innerHTML = ""; 
                    }
                    }
                }
            }
        break;
        case 38:
             /*haut*/
        for (var k = 0; k <3; k++){
             for (var i=3; i<7; i++){ 
                for (var j=3; j<7; j++){ 


                    if (document.getElementById("tableau").rows[i].cells[j].innerHTML !== "")

                        {
                        if (document.getElementById("tableau").rows[i+1].cells[j].innerHTML !== "")
                         {
                            if (document.getElementById("tableau").rows[i+1].cells[j].innerHTML == document.getElementById("tableau").rows[i].cells[j].innerHTML){
                                document.getElementById("tableau").rows[i].cells[j].innerHTML = 2*(document.getElementById("tableau").rows[i+1].cells[j].innerHTML);
                                document.getElementById("tableau").rows[i+1].cells[j].innerHTML = "";
                            }
                            if (document.getElementById("tableau").rows[i+2].cells[j].innerHTML !== ""){
                                if (document.getElementById("tableau").rows[i+2].cells[j].innerHTML == document.getElementById("tableau").rows[i+1].cells[j].innerHTML){
                                document.getElementById("tableau").rows[i+1].cells[j].innerHTML = 2*(document.getElementById("tableau").rows[i+2].cells[j].innerHTML);
                                document.getElementById("tableau").rows[i+2].cells[j].innerHTML = "";
                            }
                            j++
                            }
                            else{
                                    document.getElementById("tableau").rows[i+2].cells[j].innerHTML  = document.getElementById("tableau").rows[i+3].cells[j].innerHTML;
                                    document.getElementById("tableau").rows[i+3].cells[j].innerHTML = "";
                            }
                         }
                        else {

                            document.getElementById("tableau").rows[i+1].cells[j].innerHTML  = document.getElementById("tableau").rows[i+2].cells[j].innerHTML;
                            document.getElementById("tableau").rows[i+2].cells[j].innerHTML ="";
                        }
                    }
                    else{

                        document.getElementById("tableau").rows[i].cells[j].innerHTML  = document.getElementById("tableau").rows[i+1].cells[j].innerHTML;
                        document.getElementById("tableau").rows[i+1].cells[j].innerHTML = ""; 
                    }
                }
                }  
                } 
            break;
        case 39:

            /*droite*/
            for (var k = 0; k <3; k++){

            for (var i=3; i<7; i++){ 
                for (var j=3; j<7; j++){ 


                    if (document.getElementById("tableau").rows[i].cells[j].innerHTML !== "")

                        {
                        if (document.getElementById("tableau").rows[i].cells[j-1].innerHTML !== "")
                         {
                            if (document.getElementById("tableau").rows[i].cells[j-1].innerHTML == document.getElementById("tableau").rows[i].cells[j].innerHTML){
                                document.getElementById("tableau").rows[i].cells[j].innerHTML = 2*(document.getElementById("tableau").rows[i].cells[j-1].innerHTML);
                                document.getElementById("tableau").rows[i].cells[j+1].innerHTML = "";
                            }
                            if (document.getElementById("tableau").rows[i].cells[j-2].innerHTML !== ""){
                                if (document.getElementById("tableau").rows[i].cells[j-2].innerHTML == document.getElementById("tableau").rows[i].cells[j-1].innerHTML){
                                document.getElementById("tableau").rows[i].cells[j-1].innerHTML = 2*(document.getElementById("tableau").rows[i].cells[j-2].innerHTML);
                                document.getElementById("tableau").rows[i].cells[j-2].innerHTML = "";
                            }
                            i++
                            }
                            else{
                                    document.getElementById("tableau").rows[i].cells[j-2].innerHTML  = document.getElementById("tableau").rows[i].cells[j-3].innerHTML;
                                    document.getElementById("tableau").rows[i].cells[j-3].innerHTML = "";
                            }
                         }
                        else {

                            document.getElementById("tableau").rows[i].cells[j-1].innerHTML  = document.getElementById("tableau").rows[i].cells[j-2].innerHTML;
                            document.getElementById("tableau").rows[i].cells[j-2].innerHTML ="";
                        }
                    }
                    else{

                        document.getElementById("tableau").rows[i].cells[j].innerHTML  = document.getElementById("tableau").rows[i].cells[j-1].innerHTML;
                        document.getElementById("tableau").rows[i].cells[j-1].innerHTML = ""; 
                    }
                    
                }
            }
        }
            break;
        case 40:
             /*bas*/
             for (var k = 0; k <4; k++){
             for (var i=3; i<7; i++){ 
                for (var j=3; j<7; j++){ 


                    if (document.getElementById("tableau").rows[i].cells[j].innerHTML !== "")

                        {
                        if (document.getElementById("tableau").rows[i-1].cells[j].innerHTML !== "")
                        {
                            if (document.getElementById("tableau").rows[i-1].cells[j].innerHTML == document.getElementById("tableau").rows[i].cells[j].innerHTML){
                                document.getElementById("tableau").rows[i].cells[j].innerHTML = 2*(document.getElementById("tableau").rows[i-1].cells[j].innerHTML);
                                document.getElementById("tableau").rows[i-1].cells[j].innerHTML = "";
                            }

                         
                            if (document.getElementById("tableau").rows[i-2].cells[j].innerHTML !== ""){
                                if (document.getElementById("tableau").rows[i-2].cells[j].innerHTML == document.getElementById("tableau").rows[i-1].cells[j].innerHTML){
                                document.getElementById("tableau").rows[i-1].cells[j].innerHTML = 2*(document.getElementById("tableau").rows[i-2].cells[j].innerHTML);
                                document.getElementById("tableau").rows[i-2].cells[j].innerHTML = "";
                            }
                            j++
                            }
                            else{
                                    /*console.log("erreur 1");*/
                                    document.getElementById("tableau").rows[i-2].cells[j].innerHTML  = document.getElementById("tableau").rows[i-3].cells[j].innerHTML;
                                    document.getElementById("tableau").rows[i-3].cells[j].innerHTML = "";
                            }
                         }
                        else {
                            /*console.log("erreur 2");*/
                            document.getElementById("tableau").rows[i-1].cells[j].innerHTML  = document.getElementById("tableau").rows[i-2].cells[j].innerHTML;
                            document.getElementById("tableau").rows[i-2].cells[j].innerHTML ="";
                        }
                    }
                    else{
                        /*console.log("erreur 3");*/
                        document.getElementById("tableau").rows[i].cells[j].innerHTML  = document.getElementById("tableau").rows[i-1].cells[j].innerHTML;
                        document.getElementById("tableau").rows[i-1].cells[j].innerHTML = ""; 
                    }
                    
                }
            }

        }
            break;
    }
var Trigg = true
    while (Trigg == true)  
    {
    a = Math.floor(getRandomArbitrary(3, 7));
    b = Math.floor(getRandomArbitrary(3, 7));
    cell = document.getElementById("tableau").rows[a].cells[b].innerHTML;
    if (cell != 0)
           {a
            cell = document.getElementById("tableau").rows[a].cells[b].innerHTML;
            }
            else 
            {
                Trigg = false
                tirage = Math.floor(Math.random()*9)
                if (tirage <= 7)
                {
                    cell = document.getElementById("tableau").rows[a].cells[b].innerHTML = 2;
                }
                else
                {
                    cell = document.getElementById("tableau").rows[a].cells[b].innerHTML = 4;
                }
            }

            
       var Trigg = false 
    };
};




