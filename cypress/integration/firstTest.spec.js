/// <reference types="Cypress" />
import {basePage} from "../support/pages/basePage";
import {mobileReplenishment} from "../support/pages/mobileReplenishment";
import {transfers} from "../support/pages/transfers";

it('Replanishment of Ukraine mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en');
    mobileReplenishment.typePhoneNumber('686979712');
    basePage.typeAmount('1');
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    cy.wait(3000);
    basePage.submitPayment();
    mobileReplenishment.checkDebitCard('4552 **** **** 8217');
    mobileReplenishment.checkDebitAmount('1');
    mobileReplenishment.checkDebitAmountAndComission('2');
    mobileReplenishment.checkReceiverAmount('1');
    mobileReplenishment.checkPaymentCurrency('UAH');
});

it('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en');
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell');
    transfers.typeReceiverCard('5309233034765085');
    transfers.typeReceiverNameAndSurname('Juliana', 'Janssen');
    basePage.typeAmount('300');
    transfers.typeComment('Cypress test');
    cy.wait(3000);
    basePage.submitPayment();
    transfers.checkDebitAndReceiverCards('* 8217', '* 5085');
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '388.63');
    transfers.checkDebitComission('88.63 UAH');
    transfers.checkTotalCurrenct('UAH');
    transfers.checkComment('Cypress test');
});

it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua/').then((response)=>{
        console.log(response);
    });
});

it.only('Example sending the POST request', () => {
    const requestBody = {
      action: "info",
      phone: "+380686979712",
      amount: 50,
      currency: "UAH",
      cardCvv: "111",
      card: "4552331448138217",
      cardExp: "0524",
      xref: "9b19f21f1609d6f90467785d0889c742",
      _: 1614786849517,
    };
  
    const headersData = {
      cookie:
      "_ga=GA1.2.1810790948.1614287216; _gid=GA1.2.1746401537.1614636159; pubkey=e77fb9453f70df63f8c88ce3637f9199; lfp=2/26/2021, 12:07:06 AM; pa=1614785808896.0270.13254757492658054next.privat24.ua0.5398892970725384+1; fp=24",
    };
  
    cy.request({
      method: "POST",
      url: "https://next.privat24.ua/api/p24/pub/mobipay",
      body: requestBody,
      headers: headersData,
    }).then((response) => {
      console.log(response.body);
    });
  });