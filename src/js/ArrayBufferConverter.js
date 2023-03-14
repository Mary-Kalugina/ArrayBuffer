export default class ArrayBufferConverter {
  /* eslint-disable */load(fnc) {
    return fnc;
  }

  /* eslint-disable */toString(buffer) {
    let text = '';
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      text += String.fromCharCode(bufferView[i]);
    }
    return text;
  }
}
