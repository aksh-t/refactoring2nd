module.exports = function isOver1K(anOrder) {
  let basePrice = anOrder.basePrice;
  return (basePrice > 1000);
}