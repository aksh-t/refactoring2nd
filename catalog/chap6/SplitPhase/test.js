const expect = require('chai').expect;
const { priceOrder } = require("./main");

describe('priceOrder', () => {
  it('', () => {
    // 入力パラメータは適当に想像で用意する
    // 商品情報 = { 基本価格: 1ケース300円, 4ケース目からは割引価格, 割引率: 20%OFF }
    const product = { basePrice: 300, discountThreshold: 3, discountRate: 0.2 };
    // 購入数 = 5ケース
    const quantity = 5;
    // 配送料の計算情報 = { 通常の配送手数料/ケース: 10円, 料金合計(割引前)が1000円より高ければ割引手数料, 割引配送手数料/ケース: 5円 }
    const shippingMethod = { feePerCase: 20, discountThreshold: 1000, discountedFee: 10 };

    // テスト対象関数を実行し、結果を検証する
    expect(priceOrder(product, quantity, shippingMethod)).to.equal(1430);
  });
});