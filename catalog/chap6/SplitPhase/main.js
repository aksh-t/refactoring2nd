exports.priceOrder = function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate;

  const priceData = { basePrice: basePrice, quantity: quantity, discount: discount };

  const price = applyShipping(priceData, shippingMethod);
  return price;
};

function calculatePricingData() {

}

// テキストでは `送料の計算` と書いてあるが、実際やっているのは `注文の合計料金の計算` では？
function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
  return price;
}