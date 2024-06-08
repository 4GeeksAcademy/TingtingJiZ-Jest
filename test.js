//importat las funciones: sum()
/*const {sum} = require("./app.js");*/

//ininciamos las pruebas unitarias
/*test("adds 14 + 9 to equal 23", () => {
    //invocamos la funcion sum enviando dos parametros
    let total = sum(14, 9)
    //esperamos que la funcion nos devuelva el resultado correcto
    expect(total).toBe(23);
})*/

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("One dollar to yen", function() {
    const { fromDollarToYen } = require("./app.js");
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
})
 

test ("1007 yen to pound", function() {
    const { fromYenToPound } = require("./app.js");
    const yen = fromYenToPound(1007);
    const expected = (1007 / 156.5) * 0.87;
    expect(fromYenToPound(1007)).toBeCloseTo(5.60);
})