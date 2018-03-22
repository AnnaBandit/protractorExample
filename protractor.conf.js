'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    specs: ['specs/**/spec.ts'],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: false,
    baseUrl: 'http://www.way2automation.com/angularjs-protractor/banking/#/login',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    } /*,
    onPrepare: () => {
        let SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }*/
};
