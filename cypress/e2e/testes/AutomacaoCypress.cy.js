/// <reference types="cypress" />

import rgbHex from 'rgb-hex'

describe('Acessar o site da Amazon e pesquisar os produtos mais vendidos'), () => {

  it('Visitar o site da Amazon e pesquisar os produtos mais vendidos'), () => {

    cy.visit('https://amazon.com.br')
    cy.title().should('be.equal', 'Amazon.com.br | Tudo pra você, de A a Z.')
    cy.get('#twotabsearchtextbox').should('be.visible').type('Mais Vendidos{enter}')
    cy.title().should('be.equal', 'Amazon.com.br : Mais Vendidos')

  }
  
  it('Classificar produtos por preço do Menor para o Maior'), () => {    

    cy.contains('Classificar por').click()
    cy.contains('do menor preço para o maior')

  }
    
  it('Validar a cor do botão de classificação dos produtos'), () => { 

    cy.get('.a-dropdown-label').invoke('css', 'background-color')
      .then(bgcolor).expect(rgbHex(bgcolor)).to.eq('ffd814')
  
  }

  it('Validar a fonte do botão de classificação dos produtos')

    cy.get('#sc-buy-box-ptc-button').should('have.css', 'font-family')
      .should('eq', '"Amazon Ember", Arial, sans-serif')
  }

    //cy.get('.a-button-primary').invoke('css', 'background-color').then(bgcolor).expect(rgbHex(bgcolor)).to.eq('ef0b800')