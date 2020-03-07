class VigenereCipheringMachine {
    encrypt(message, key) {
        if (message != true && key != true) {
            throw new Error;
        }

    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage != true && key != true) {
            throw new Error;
        
    }
    }
}
module.exports = VigenereCipheringMachine;
