export default class ArrayBufferConverter {
  load(fnc) {
    return fnc;
  }

  toString(buffer) {
    let text = '';
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      text += String.fromCharCode(bufferView[i]);
    }
    return text;
  }
}
