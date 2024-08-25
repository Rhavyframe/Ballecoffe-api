import { filtrarPorIdade, filtrarPorInicial, findMax, findMedia, findMin, sumArray } from "../src/utils/functions";

describe('Testes para práticar lógica de programação', () => {
    describe('findMax', () => {
        test('should return the largest number in the array', () => {
            expect(findMax([1, 3, 7, 2, 5])).toBe(7);
        });

        test('should return a single number when array has one element', () => {
            expect(findMax([10])).toBe(10);
        });

        test('should handle negative numbers', () => {
            expect(findMax([-1, -3, -7, -2, -5])).toBe(-1);
        });

        test('should throw an error for an empty array', () => {
            expect(() => findMax([])).toThrow('Array cannot be empty');
        });
    });

    describe('findMin', () => {
        test('should return the smallest number in the array', () => {
            expect(findMin([1, 3, 7, 2, 5])).toBe(1);
        });

        test('should return a single number when array has one element', () => {
            expect(findMin([10])).toBe(10);
        });

        test('should handle negative numbers', () => {
            expect(findMin([-1, -3, -7, -2, -5])).toBe(-7);
        });

        test('should throw an error for an empty array', () => {
            expect(() => findMin([])).toThrow('Array cannot be empty');
        });
    });

    describe('findMedia', () => {
        test('should return the average of the numbers in the array', () => {
            expect(findMedia([5, 2, 3, 4, 1, 3])).toBe(3);
        });

        test('should return the correct average with negative numbers', () => {
            expect(findMedia([-5, -2, -3, -4, -1])).toBe(-3);
        });

        test('should return the value itself for a single-element array', () => {
            expect(findMedia([10])).toBe(10);
        });

        test('should throw an error for an empty array', () => {
            expect(() => findMedia([])).toThrow('Array cannot be empty');
        });
    });

    describe('sumArray', () => {
        test('should return the sum of all numbers in the array', () => {
            expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
        });

        test('should return 0 for an empty array', () => {
            expect(sumArray([])).toBe(0);
        });

        test('should handle negative numbers correctly', () => {
            expect(sumArray([-1, -2, -3, 4, 5])).toBe(3);
        });
    });

    describe('filtrarPorIdade', () => {
        const pessoas = [
            { idade: 10 },
            { idade: 20 },
            { idade: 30 },
            { idade: 40 },
            { idade: 50 }
        ];

        test('should return all people within the age limits', () => {
            expect(filtrarPorIdade(pessoas, { min: 20, max: 40 })).toEqual([
                { idade: 20 },
                { idade: 30 },
                { idade: 40 },
            ]);
        });

        test('should return all people above the minimum age', () => {
            expect(filtrarPorIdade(pessoas, { min: 30 })).toEqual([
                { idade: 30 },
                { idade: 40 },
                { idade: 50 },
            ]);
        });

        test('should return all people below the maximum age', () => {
            expect(filtrarPorIdade(pessoas, { max: 30 })).toEqual([
                { idade: 10 },
                { idade: 20 },
                { idade: 30 },
            ]);
        });

        test('should return all people when no limits are provided', () => {
            expect(filtrarPorIdade(pessoas)).toEqual(pessoas);
        });

        test('should return an empty array if no one matches the age limits', () => {
            expect(filtrarPorIdade(pessoas, { min: 60 })).toEqual([]);
        });
    });

    describe('filtrarPorInicial', () => {
        const nomes = [
            { nome: 'Alice' },
            { nome: 'Ana' },
            { nome: 'Bruno' },
            { nome: 'Carlos' },
            { nome: 'Catarina' }
        ];

        test('should return all names that start with a specific letter', () => {
            expect(filtrarPorInicial(nomes, 'A')).toEqual([
                { nome: 'Alice' },
                { nome: 'Ana' },
            ]);
        });

        test('should return an empty array if no names start with the given letter', () => {
            expect(filtrarPorInicial(nomes, 'D')).toEqual([]);
        });

        test('should handle case sensitivity by returning correct matches', () => {
            expect(filtrarPorInicial(nomes, 'c')).toEqual([
                { nome: 'Carlos' },
                { nome: 'Catarina' },
            ]);
        });

        test('should return an empty array if the array is empty', () => {
            expect(filtrarPorInicial([], 'A')).toEqual([]);
        });
    });
})