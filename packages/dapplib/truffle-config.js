require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note mean erosion include inflict sudden sport'; 
let testAccounts = [
"0xabbab4cbe473d010055d3c3c65b6631e7d75755ca19597fd53c10f2e3a0dd810",
"0x99af9f79d2361eecf23c9d18a46084773a3191f06655574b29776eb90370a0ca",
"0x603cb5adf28f9ee143454c2bd86bbc656f0d7e565d1d3b1207f364818551356d",
"0x59654f4108fc4a29125ba8c3a80a598d2c1658e0155e0f655ca5899d9d5f0207",
"0x86899a2529ffc0fbd69533511df972257000d16243444566ec7b4deb97b1cea8",
"0xd554bb37dc917e73eeea4dc16d048aba9618891de667f14a38f4d427c2d3b26f",
"0xc553a7f8d5f631274ecc977763d6a7fa5ebd69c4c9e895d6ebd70e8eee3eb17a",
"0x9f05e864fd68d203aa6a9bfa673837ea443923057085fc536ff2a3e4b693c37a",
"0x93a16801b9646e49e7da86dc0c7e02bfc3c744afda06640bb10731ad980bb05f",
"0x47bf685b3a8890e3a1150ba050459a74384d74330b4bb196fbd5bb190dc96e19"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

