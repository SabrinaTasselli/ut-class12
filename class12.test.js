import * as testing from "./class12";

describe("texto function", () => {  
    test("the text can not be empty", () => {
        expect(testing.texto("hello")).not.toBe("");
    });
    test("the return text must be the same", () => {
        const texto = "hello my name is sabrina tasselli";
        expect(testing.texto(texto)).toBe("hello my name is sabrina tasselli");
    });
});
describe("suma function", () => {
    test("sumar 1 + 2 es igual a 3", () => {
        expect(testing.suma(1, 2)).toBe(3);
    });
    test("sumar 1 + -3 es igual a -2", () => {
        expect(testing.suma(1, -3)).toBe(-2);
    });
    test("sumar -1 + -3 es igual a -4", () => {
        expect(testing.suma(-1, -3)).toBe(-4);
    });
    test("sumar 1 + 0.5 es igual a 1.5", () => {
        expect(testing.suma(1, 0.5)).toBe(1.5);
    });
});
describe("resta function", () => {
    test("restar 2 - 1 es igual a 1", () => {
        expect(testing.resta(2, 1)).toBe(1);
    });
    test("restar -2 - 1 es igual a -3", () => {
        expect(testing.resta(-2, 1)).toBe(-3);
    });
    test("restar -2 - (-1) es igual a -1", () => {
        expect(testing.resta(-2, -1)).toBe(-1);
    });
    test("restar -2,5 - (-1) es igual a -1", () => {
        expect(testing.resta(-2, -1)).toBe(-1,5);
    });
});
describe("multiplicacion function", () => {
    test("multiplicar 2 * 5 es igual a 10", () => {
        expect(testing.multiplicacion(2, 5)).toBe(10);
    });
    test("multiplicar -2 * 5 es igual a -10", () => {
        expect(testing.multiplicacion(-2, 5)).toBe(-10);
    });
    test("multiplicar -2 * (-5) es igual a -10", () => {
        expect(testing.multiplicacion(-2, -5)).toBe(10);
    });
    test("multiplicar 0 * 5 es igual a 0", () => {
        expect(testing.multiplicacion(0, 5)).toBe(0);
    });
    test("multiplicar 0.5 * 5 es igual a 0", () => {
        expect(testing.multiplicacion(0.5, 5)).toBe(2.5);
    });
});
describe("division function", () => {
    test("dividir 5 / 0 es igual a error", () => {
        expect(testing.division(5, 0)).toMatch("No se puede dividir por 0");
    });
    test("dividir 5 / 2 es igual a 2.5", () => {
        expect(testing.division(5, 2)).toBe(2.5);
    });
    test("dividir 2 / 5 es igual a 0.4", () => {
        expect(testing.division(2, 5)).toBe(0.4);
    });
    test("dividir 0 / 2 es igual a 0", () => {
        expect(testing.division(0, 2)).toBe(0);
    });
});
describe("tablamultiplicar function", () => {
    test("multiplicador indefinido, usar como 10", () => {
        expect(testing.tablaMultiplicar(2)).toStrictEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
    test("multiplicar 5 * 2", () => {
        expect(testing.tablaMultiplicar(5, 2)).toStrictEqual([0, 5, 10]);
    });
    test("multiplicar 0 * 2", () => {
        expect(testing.tablaMultiplicar(0, 2)).toStrictEqual([0, 0, 0]);
    });
})
describe("potencia function", () => {
    test("exponente igual a 1 es igual a base", () => {
        expect(testing.potencia(2, 1)).toBe(2);
    });
    test("exponente igual a 2 es igual a base*base", () => {
        expect(testing.potencia(3, 2)).toBe(9);
    });
    test("exponente igual a 0 es igual a 1", () => {
        expect(testing.potencia(3, 0)).toBe(1);
    });
    test("base igual a 0 es igual a 0", () => {
        expect(testing.potencia(0, 2)).toBe(0);
    });
    test("base igual a 10 y exponte positivo = base con 0 = exponente hacia la derecha", () => {
        expect(testing.potencia(10, 2)).toBe(100);
    });
    test("base igual a 10 y exponte negativo = base con 0 = exponente hacia la izquierda", () => {
        expect(testing.potencia(10, -2)).toBe(0.01);
    });
    test("exponente igual a nro negativo es igual a 1/exp", () => {
        expect(testing.potencia(2, -2)).toBe(0.25);
    });
});
describe("anidada function", () => {
    test("a=2, b=2, anidada=8", () => {
        expect(testing.anidada(2, 2)).toBe(8);
    });
    test("a=0, anidada=b*b", () => {
        expect(testing.anidada(0, 2)).toBe(4);
    });
    test("a=-2, b=-2 anidada=4+4", () => {
        expect(testing.anidada(-2, -2)).toBe(8);
    });
    test("a=-2, b=2 anidada=4*4", () => {
        expect(testing.anidada(-2, 2)).toBe(8);
    });
});
describe("cerosizq function", () => {
    test("num=5 and totallenght=5", () => {
        expect(testing.cerosIzq(5, 5)).toBe("00005");
    });
    test("num=50 and totallenght=5", () => {
        expect(testing.cerosIzq(50, 5)).toBe("00050");
    });
    test("num=500 and totallenght=5", () => {
        expect(testing.cerosIzq(500, 5)).toBe("00500");
    });
    test("num=cinco and totallenght=cinco", () => {
        expect(testing.cerosIzq("cinco", "cinco")).toBe("cinco");
    });
    test("num=cinco and totallenght=cinco", () => {
        expect(testing.cerosIzq("cinco", 5)).toBe("cinco");
    });
    test("num=Hello world and totallenght=15", () => {
        expect(testing.cerosIzq("hello world", 15)).toBe("0000hello world");
    });
    test("num=Hello world and totallenght=15", () => {
        expect(testing.cerosIzq(10, "hello world")).toBe("10");
    });
});