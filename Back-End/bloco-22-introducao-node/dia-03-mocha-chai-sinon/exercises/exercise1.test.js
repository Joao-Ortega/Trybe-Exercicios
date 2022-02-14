const func = require('./whatNumb.js');
const { expect } = require("chai");


describe('Quando a função existir', () => {
  describe('Quando o parâmetro for', () => {
    describe('Maior que 0', () => {
      it('Deverá retornar positivo', () => {
        const resp = func(1);
        expect(resp).to.be.a('string');
        expect(resp).to.be.equal('positivo');
      });
    });
    describe('Igual a 0', () => {
      it('Deverá retornar neutro', () => {
        const resp = func(0);
        expect(resp).to.be.a('string');
        expect(resp).to.be.equal('neutro');
      });
    });
    describe('Menor que 0', () => {
      it('Deverá retornar negativo', () => {
        const resp = func(-8);
        expect(resp).to.be.a('string');
        expect(resp).to.be.equal('negativo');
      });
    });
    describe('Diferente de um número', () => {
      it('Deverá retornar: O valor não é um número', () => {
        const resp = func('a');
        expect(resp).to.be.a('string');
        expect(resp).to.be.equal('O valor deve ser um número');
      })
    })
  });
});