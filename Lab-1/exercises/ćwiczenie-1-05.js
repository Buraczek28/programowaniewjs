/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`. 
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */
let n = 36;
let m = 50;
let progressBar = ""


let percentage = Math.round((n/m)*100);
let rest = 100 - percentage;
let bar = ""

for(let j=1; j<=percentage/2; j++){
    console.log(percentage);
    bar += '#'
}
for(let i=1; i<= rest/2; i++){
    console.log(rest);
    bar += ' '
}

progressBar= '|' +bar+ '|'

let barPercentage = '0%           ' + '          ' + percentage + '%' + '     ' + '          ' + '       100%'

console.log(progressBar)
console.log(barPercentage)