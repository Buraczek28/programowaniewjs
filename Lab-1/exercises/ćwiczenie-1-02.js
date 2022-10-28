/**
 * Napisz skrypt, który w łańcuchu triangle zawiera ciąg znaków '#' i '\n' tworzących kształ trójkąta o wysokości 
 * w zmiennej height. Po wyświetleniu na konsoli powinien zostać wyświetlony poniższy wzór liczba wierzy powinna odpowiadać 
 * zmiennej height:
 * #
 * ##
 * ###
 * ####
 * ##### 
 */

let height = 5;
let triangle = '';

/*
for (let i = 1; i <= height; i++) { 

    let triangle = ""; 
    for(let j = 1; j > 0; j--)
    {
      triangle += "";
    }
    for(let j = i; j > 0; j--)
    {
      triangle += "#";
    } 
   
  }
  */

for (let i = 1; i <=height; i++){

    triangle=" ";

    for(let j=0; j<i; j++){
        triangle+="#";
    }

    console.log(triangle);
}

