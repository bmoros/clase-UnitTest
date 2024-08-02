const RateManager = require('./RateManager');

let rate;

beforeEach(() => {
  rate = new RateManager();
});

test('default tax rate', () => {
  expect(rate.lookupTaxRate('Murcia')).toBe(0.3);
});

test('test region required', () => {
  expect(() => {
    rate.lookupTaxRate('');
  }).toThrow("Region can't be blank!");
});
