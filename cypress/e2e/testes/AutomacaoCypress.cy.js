/// <reference types="cypress" />

import rgbHex from 'rgb-hex'

describe('Acessar o site da Amazon e comprar o produto mais vendido', () => {

  it('Visitar o site da Amazon e adicionar o produto mais vendido no carrinho', () => {

    cy.visit('https://amazon.com.br')
    cy.title().should('be.equal', 'Amazon.com.br | Tudo pra você, de A a Z.')
    cy.get('#twotabsearchtextbox').should('be.visible').type('Mais Vendidos{enter}')
    cy.title().should('be.equal', 'Amazon.com.br : Mais Vendidos')
    cy.get('[data-asin="8543105692"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
    cy.get('#add-to-cart-button').click()

    cy.get('#nav-cart-count').should('be.visible').contains('1')
    cy.get('#nav-cart-count').should('have.length', '1')

    //script validação cor
    cy.get('#sc-buy-box-ptc-button').invoke('css', 'background-color')
      .then((bgcolor) => {
        expect(rgbHex(bgcolor)).to.eq('ffd814')
      })

    //script validação font
    cy.get('#sc-buy-box-ptc-button').should('have.css', 'font-family')
      .should('eq', '"Amazon Ember", Arial, sans-serif')

    //cy.get('.a-button-primary').invoke('css', 'background-color').then(bgcolor).expect(rgbHex(bgcolor)).to.eq('ef0b800')

  })


})