//import The function that you want to test
const taxCalc = require('../src/TaxTable'); 

//We are using the mocha test framework and Chai to organise and execute our test
const chai = require('chai');
const expect = chai.expect;

//Below, we are testing the amount of tax a user is going to have to pay 
//based on his/her income if they work in South Africa with a monthly
//income of R12,300.00

describe('#taxTable(taxEarning', function() {
    it(`Nett should calc correcty to the taxEarning value` , function() {
        let taxEarning = 15000;
        let expected = '12300.00';
        let actual = taxCalc.taxTable(taxEarning);
        expect(actual).to.equal(expected);
    });
});