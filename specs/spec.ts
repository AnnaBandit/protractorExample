import { element, by, browser } from 'protractor';

describe ('test', () => {
    it('log in as manager and add a new customer', () => {
        browser.driver.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.buttonText('Bank Manager Login')).click();
        element(by.buttonText('Add Customer')).click();
        element(by.model('fName')).sendKeys('test');
        element(by.model('lName')).sendKeys('test');
        element(by.model('postCd')).sendKeys('61001');
        element(by.css('.btn-default')).click();
    })
})