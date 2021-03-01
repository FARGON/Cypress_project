/// <reference types="Cypress" />

//require('cypress-xpath')

context('Actions', () => {
    beforeEach(() => {
      
      cy.viewport(1920,1080)
    })

    it('.Sign in', () => {
        cy.visit('https://dev.vindatahistory.com/login')
        cy.get('#rcc-confirm-button').click()
        cy.get('#username').type('kmakarov@tula.co')
        cy.get('#password').type('270290Aa?')
         cy.get('#__next > article > div.LayoutStyled__ContentContainer-sc-1p37lxw-1.jPzVPe > main > section > div > form > div:nth-child(6) > button',).click()
         cy.wait(5000)
         cy.get ('#vin').type('JTDKB20U553017299', { timeout: 50000 })
         cy.get ('#__next > article > div > main > div:nth-child(2) > div > div.LoadingStyled__LoadingContainerRoot-sc-1k9uvqo-1.igDLCZ > div > form > div > div > button').click()
         cy.wait (2000)
         
         
        // cy.get('#phone').type('12133206651')
        // cy.get('#zipCode').type('90201')
        // cy.get('#root > form > span:nth-child(4) > div > div.CardNumberField-input-wrapper > span > input').type('4242 4242 4242 4242')
        // cy.get('#root > form > span:nth-child(4) > span > input').type('1133')
        // cy.get('#root > form > span:nth-child(4) > span > input').type('333')
        // cy.xpath
  
      })
    })