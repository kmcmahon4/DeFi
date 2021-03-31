const TokenFarm = artifacts.require('TokenFarm');
const DappToken = artifacts.require('DappToken');
const DaiToken = artifacts.require('DaiToken');

//Puts all smart contracts onto the blockchain
module.exports = async function(deployer, network, accounts) {

    //Deploy DappToken to blockchain
    await deployer.deploy(DappToken);
    const dappToken = await DappToken.deployed();

    //Deploy DaiToken to blockchain
    await deployer.deploy(DaiToken);
    const daiToken = await DaiToken.deployed();

    //Deploy TokenFarm to blockchain
    await deployer.deploy(TokenFarm, dappToken.address, daiToken.address);
    const tokenFarm = await TokenFarm.deployed();

    // Transfer all tokens to TokenFarm (1 million)
    await dappToken.transfer(tokenFarm.address, '1000000000000000000000000');

    // Transfer all tokens to TokenFarm (1 million)
    await daiToken.transfer(accounts[1], '100000000000000000000');
}