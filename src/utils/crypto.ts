import CryptoJS from 'crypto-js';
const PRIVATE_KEY = "ualsdfkasHLKFlkjhFLKJHWOUOWID<CBMNSKPI"
const encrypt = (data: string) => {

    const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), PRIVATE_KEY).toString();
    return cipherText;
}

const decrypt = (cipherText: string) => {
    try{
        const bytes = CryptoJS.AES.decrypt(cipherText, PRIVATE_KEY);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    }
    catch(e){
        return {}
    }

}

export { encrypt, decrypt };