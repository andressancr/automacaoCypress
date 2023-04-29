/// <reference types="cypress" />

describe('Acessar o site da Amazon e comprar o produto mais vendido', () => {

it('Visitar o site da Amazon e adicionar o produto mais vendido no carrinho', () => {

  cy.visit('https://amazon.com.br')
  cy.title().should('be.equal','Amazon.com.br | Tudo pra você, de A a Z.')
  cy.get('#twotabsearchtextbox').should('be.visible').type('Mais Vendidos{enter}')
  cy.title().should('be.equal','Amazon.com.br : Mais Vendidos')
  cy.get('[data-asin="8543105692"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
  cy.get('#add-to-cart-button').click()

  })

})