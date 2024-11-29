const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        // Spy on console.log before each test
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the spy after each test
        consoleLogSpy.restore();
    });

    it('should log "The total is: 120" and only call console.log once when called with 100 and 20', function () {
        sendPaymentRequestToApi(100, 20);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('should log "The total is: 20" and only call console.log once when called with 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    });
});
