import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('string', () => {
  const funcBuffer = getBuffer;
  const obj = new ArrayBufferConverter();
  const buffer = obj.load(funcBuffer);
  const str = obj.toString(buffer);

  const result = str;

  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
