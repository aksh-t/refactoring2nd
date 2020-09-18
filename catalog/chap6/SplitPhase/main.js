exports.priceOrder = function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate;

  const priceData = { basePrice: basePrice };

  const price = applyShipping(priceData, shippingMethod, quantity, discount);
  return price;
};

// テキストでは `送料の計算` と書いてあるが、実際やっているのは `注文の合計料金の計算` では？
function applyShipping(priceData, shippingMethod, quantity, discount) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = priceData.basePrice - discount + shippingCost;
  return price;
}