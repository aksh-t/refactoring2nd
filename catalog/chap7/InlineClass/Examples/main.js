class TrackingInformation {
  // テキストにはコンストラクタは書いてないので、自分で仕様を決めて実装した
  constructor(data) {
    this._shippingCompany = data.shippingCompany;
    this._trackingNumber = data.trackingNumber;
  }
  get shippingCompany() { return this._shippingCompany; }
  set shippingCompany(arg) { this._shippingCompany = arg; }
  get trackingNumber() { return this._trackingNumber; }
  set trackingNumber(arg) { this._trackingNumber = arg; }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  // テキストにはコンストラクタは書いてないので、自分で仕様を決めて実装した
  constructor(data) {
    this._trackingInformation = new TrackingInformation(data);
  }
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation() { return this._trackingInformation; }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

exports.Shipment = Shipment;
exports.TrackingInformation = TrackingInformation;