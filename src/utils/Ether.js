import detectEthereumProvider from '@metamask/detect-provider';
import { Contract, ethers }   from "ethers";
import MyContractsManifest    from '../contracts/MyContract.json';

const getBlockchain = async () => {
    let provider = await detectEthereumProvider();
    if(provider) {
        await provider.request({ 
            method: 'eth_requestAccounts'
        });
        provider     = new ethers.providers.Web3Provider(provider);
        const signer = provider.getSigner();

        const myContract = new Contract(
            MyContractsManifest.networks[97].address,
            MyContractsManifest.abi,
            signer
        );

        return MyContractsManifest;
    }
    return null;
}

module.exports = { getBlockchain }