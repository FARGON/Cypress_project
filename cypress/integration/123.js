/// <reference types="cypress" />

let user;

require('cypress-xpath')
const faker = require('faker')

let userData = {
  randomName: faker.name.findName(),
  randomEmail: faker.internet.email(),
  randomPassword: faker.random.number()
}



context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://dev.vindatahistory.com/')
      cy.viewport(1920,1080)
    })
  
  
    it('.New tabs', () => {
      cy.get('#rcc-confirm-button').click()
      cy.get('#__next > article > div.LayoutStyled__ContentContainer-sc-1p37lxw-1.IdvLC > main > section:nth-child(2) > div > header > a').invoke('attr','href')
      .then($link => {
        const link = $link
        cy.visit('https://dev.vindatahistory.com' + $link )
      })
      
      cy.get('#__next > article > aside > div > div.SidebarLayoutStyled__NavWrapper-bvvc23-4.hpRfyO > nav > ul > li:nth-child(11) > a > span.SidebarNavStyled__ItemText-sc-1tqq8ch-4.lcSTDp').click()

      
    })
  })