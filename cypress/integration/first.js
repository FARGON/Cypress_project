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
      cy.visit('https://dev.vindatahistory.com/order')
      cy.viewport(1920,1080)
    })
  
  
    it('.Sign up on order', () => {
      
    

      // let userData = {
      //     randomName: faker.name.findName(),
      //     randomEmail: faker.internet.email(),
      //     randomPassword: faker.random.number()
      // }
      
      cy.get('#rcc-confirm-button').click()
      cy.get('#firstName').type('auto')
      cy.get('#lastName').type('test')
      cy.get('#email').type(userData.randomEmail)
      cy.get('#phone').type('12133206651')
      cy.get('#zipCode').type('90201')

      cy.wait(500)
      cy.get('.__PrivateStripeElement > iframe').then($element => {
      
        const $body = $element.contents().find('body')
      
        cy.get(".__PrivateStripeElement > iframe").then(($element) => {
          const $body = $element.contents().find("body");

          let stripe = cy.wrap($body);
          stripe
              .find('[data-elements-stable-field-name="cardNumber"]')
              .click()
              .type("4242 4242 4242 4242");

          stripe = cy.wrap($body);
          stripe
              .find('[name="exp-date"]')
              .click()
              .type("1133");

          stripe = cy.wrap($body);
          stripe
              .find('[name="cvc"]')
              .click()
              .type("333");

      });
      })
      cy.get('#paymentForm > div:nth-child(4) > div.FormStyled__CheckBoxRoot-u0whj9-9.gjHAWf > label > span').click()
      cy.get('#paymentForm > div.FormStyled__FormSectionRoot-u0whj9-5.fjMaox > div > label > span').click()
      cy.get('#__next > article > aside > div > div > div.LoadingStyled__LoadingContainerRoot-sc-1k9uvqo-1.igDLCZ > div.SectionStyled__SectionRoot-ohq396-0.htPtjO > button').click()
      cy.wait(50000)
      cy.get('#__next > article > aside > div > div > div.LoadingStyled__LoadingContainerRoot-sc-1k9uvqo-1.igDLCZ > div:nth-child(3) > button.FormStyled__ButtonRoot-u0whj9-14.iNFwIS').click()

    })
  })