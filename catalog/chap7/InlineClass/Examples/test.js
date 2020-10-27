const expect = require('chai').expect;
const { Shipment } = require('./main');

describe('Shipment', () => {
  it('trackingInfo', () => {
    const aShipment = new Shipment({
      shippingCompany: 'Hoge Express',
      trackingNumber: 1000
    });
    expect(aShipment.trackingInfo).to.equal('Hoge Express: 1000');
  });
});