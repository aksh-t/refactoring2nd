const { expect } = require("chai");
const { trackSummary } = require("./main");

describe('', () => {
  it('', () => {
    const point1 = { lon: 139, lat: 35 };
    const point2 = { lon: 140, lat: 36 };
    expect(trackSummary([point1, point2])).to.deep.equal({
      time: 60,
      distance: 1,
      pace: 1
    });
  });
});