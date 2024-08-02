const { sumAndCheck, ordenar } = require('./utils');

describe('suman de dos números', () => {
  let num1;

  beforeEach(() => {
    num1 = 2;
  });

  test('2 y 9 la suma es mayor que 10', () => {
    //Arrange
    //const num1 = 2;
    const num2 = 9;

    //Act
    const result = sumAndCheck(num1, num2);

    //Assert
    expect(result).toBe(true);
    //expect(result).toBeTruthy();
  });

  test('2 y 5 la suma es menor que 10', () => {
    //Arrange
    //const num1 = 2;
    const num2 = 5;

    //Act
    const result = sumAndCheck(num1, num2);

    //Assert
    //expect(result).toBe(false);
    expect(result).toBeFalsy();
  });

  test('no se pueden sumar números negativos', () => {
    const num2 = -1;

    expect(() => sumAndCheck(num1, num2)).toThrow(
      'los números tienen que ser positivos'
    );
  });

  test('si la suma es 10 es menor que 10', () => {
    const num2 = 8;

    const result = sumAndCheck(num1, num2);

    expect(result).toBe(false);
  });
});

describe('ordenar', () => {
  test('ordenar una lista de un elemento devuelve la misma lista', () => {
    const lista = [1];

    const result = ordenar(lista);

    expect(result).toBe(lista);
  });

  test('ordenar una lista de dos elementos ordenador devuelve la misma lista', () => {
    const lista = [1, 2];

    const result = ordenar(lista);

    expect(result).toEqual(lista);
  });

  test('ordenar una lista de dos elementos desordenados los ordena', () => {
    const lista = [2, 1];

    const result = ordenar(lista);

    expect(result).toEqual([1, 2]);
  });
});
