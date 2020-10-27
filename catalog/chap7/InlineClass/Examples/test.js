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

// callerをテストで擬似的に表現する
describe('caller', () => {
  it('', () => {
    const aShipment = new Shipment({
      shippingCompany: 'Hoge Express',
      trackingNumber: 1000
    });
    const request = { vendor: 'Fuga International Trade' };

    // TrackingInformation のメソッドを呼んでいる箇所
    aShipment.trackingInformation.shippingCompany = request.vendor;
    expect(aShipment.trackingInformation.shippingCompany).to
      .equal('Fuga International Trade');
  });
});