const { assert } = require('chai');

const TokenFarm = artifacts.require('TokenFarm');
const DappToken = artifacts.require('DappToken');
const DaiToken = artifacts.require('DaiToken');


//Mocha.js testing framework
require ('chai')
    .use(require('chai-as-promised'))
    .should()


    contract ('TokenFarm', (accounts) => {

    let daiToken, dappToken, tokenFarm;

    //Setup
    before(async () => {
    daiToken = await DaiToken.new()
    dappToken = await DappToken.new()
    tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address)

    //Transfer Dapp tokens to TokenFarm
    await dappToken.transfer(tokenFarm.address,'1000000000000000000000000')
    })

    // Write tests here
    describe('Mock Dai deployment', async () => {
        it('has a name', async () => {
            const name = await daiToken.name()
            assert.equal(name, 'Mock DAI Token')
    })
})
})