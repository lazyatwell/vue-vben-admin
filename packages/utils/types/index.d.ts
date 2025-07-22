declare module 'jsencrypt/bin/jsencrypt.min' {
  export default class JSEncrypt {
    constructor();
    decrypt(data: string): false | string;
    encrypt(data: string): false | string;
    getKey(): string;
    getPrivateKey(): string;
    getPublicKey(): string;
    setPrivateKey(key: string): void;
    setPublicKey(key: string): void;
  }
}
