/**
 * Napisz skrypt, który oblicza promień koła na podstawie pola powierzchni w zmiennej area
 * Wynik zapisz do zmiennej łańuchowej radius z dwoma miejscami po przecinku.
 */
let area = 5;
let radius = '';

    radius = area/Math.PI;
    radius = Math.sqrt(radius);
    radius = radius.toFixed(2);

console.log("promień to:" + radius);

