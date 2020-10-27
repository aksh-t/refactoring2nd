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
}

class Shipment {
  // テキストにはコンストラクタは書いてないので、自分で仕様を決めて実装した
  constructor(data) {
    this._trackingInformation = new TrackingInformation(data);
  }
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
  get trackingInformation() { return this._trackingInformation; }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
  get shippingCompany() {
    return this._trackingInformation.shippingCompany;
  }
  set shippingCompany(arg) {
    this._trackingInformation.shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingInformation.trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingInformation.trackingNumber = arg;
  }
}

exports.Shipment = Shipment;
exports.TrackingInformation = TrackingInformation;