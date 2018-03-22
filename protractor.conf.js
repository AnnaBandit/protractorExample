'use strict';
const { SpecReporter } = require('jasmine-spec-reporter');
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
    } ,
    onPrepare: () => {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
}
