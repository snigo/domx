import setCSSVariables from '../src/css/set-variables';

test('handling incorrect input', () => {
  expect(setCSSVariables('div')).toBeUndefined();
  expect(setCSSVariables({}, 'entry')).toBeUndefined();
  expect(setCSSVariables()).toBeUndefined();
});
