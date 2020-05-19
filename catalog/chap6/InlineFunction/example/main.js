function rating(aDriver) {
  return moreThanFiveLaterDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLaterDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}