import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('check toString', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toMatch(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});
