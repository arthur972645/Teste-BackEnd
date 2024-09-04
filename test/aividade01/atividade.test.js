import AcharNumeroPar from './atividade01.js';

test("Achar numero par", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expecteNumbers = [2, 4, 6, 8, 10];

    const evenNumbers = AcharNumeroPar(numbers);
    expect(evenNumbers).toEqual(expecteNumbers);
})