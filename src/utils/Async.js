import { getBlockchain } from "./Ether";

const initToAsync = async () => {
    let myContract = await getBlockchain();
    let data       = await myContract.getAdoptDog();
    setState({
        myContract:myContract,
        data:data
    });
};

const clickAdoptDog = async (index) => {
    const tx = this.state.myContract.adopt(index);
    await tx.await();

    const newData = await this.state.myContract.getAdoptDog();
    this.setState({
        data:newData
    });
};

module.exports = { initToAsync }