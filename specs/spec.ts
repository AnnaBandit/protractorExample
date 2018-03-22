import { element, by } from 'protractor';

describe ('test', () => {
    it('log in as manager and add a new customer', () => {
        element(by.buttonText('Bank Manager Login')).click();
        element(by.buttonText('Add Customer')).click();
        element(by.model('fName')).sendKeys('test');
        element(by.model('lName')).sendKeys('test');
        element(by.model('postCd')).sendKeys('61001');
        element(by.css('.btn-default')).click();
    })
})