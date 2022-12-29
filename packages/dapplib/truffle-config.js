require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name riot sad erosion gloom kangaroo army genre'; 
let testAccounts = [
"0x5ccdaa85d1752c33082342ac57a4cca91f9f4773f63e09b616a8a851b853bfcd",
"0xada6830c9005da1b746ea4c5ff638f8e42c8c27762f0cdc477e9aa420db9026c",
"0x1666bc6bd20b8e9cd649958179118eff72d6e7a7337f33eeda07168dd445563f",
"0x2c860466670b1e414a051410611bf01ef6d8e5d16d71f553cc3f6ada02e6b556",
"0x973fa2b6c6bee42d92ebd306ca974970def0cf5d5302a465a731959cf1a47036",
"0x8d0005d7179345c31ab9ebf5769491018c6d9c2b70161ec9b952e3882677c7be",
"0xe37fa7b41213a213cd8a3f02d5b39cad95767e649b538e97f72df139f6791881",
"0x85191a4d707db010f18ac82b2e136209ce107f4d300bc4400fcb05e89dd7bba2",
"0xd0d0a4678a447f39f7e20f30a3b9c555445f340f52705f95bc2ed611867e46a9",
"0x0b247e733b7b3a551e288786ee5a82552a0a683b7854ad26ff162f8203f21a26"
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

