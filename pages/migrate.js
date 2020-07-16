import React, {useState, useEffect} from 'react';
import Layout from '../components/MyLayout';
import web3 from '../web3';
import {Box, Paragraph, Button, TextInput} from 'grommet';
import {PrimaryButton} from '../components/Common/Button';
import Loading from '../components/Common/Loading';

// import mus from '../contracts/mus';

function Migrate() {
  const MUSICOIN_NETWORK_ID = '7762959';
  const [network, setNetwork] = useState(0);
  const [account, setAccount] = useState('');
  const [currentBalance, setCurrentBalance] = useState('');
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);

  const migrate = async () => {
    setStep(2);
    setTimeout(() => {
      //ToDo: transfer musicoins to specific address (skip this for now), connect to rinkeby test network to send amount/1000 to the specified address with the manager account
      // console.log(process.env.NEXT_PUBLIC_MANAGER_ADDRESS);
      // try {
      //   const transaction = await mus.methods.transfer(account, web3.utils.toWei('1', 'ether')).send({from: process.env.NEXT_PUBLIC_MANAGER_ADDRESS});
      //   console.log(transaction);
      // } catch (err) {
      //   console.log(err);
      // }
      setStep(3);
    }, 2000);
  };

  const startOver = () => {
    setStep(1);
  };

  useEffect(() => {
    const getAccountInfo = async () => {
      if (process.browser) {
        await window.ethereum.enable();
        try {
          const network = await web3.eth.net.getId();
          setNetwork(network);
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          const balance = await web3.eth.getBalance(accounts[0]);
          setCurrentBalance(web3.utils.fromWei(balance, 'ether'));
          setAmount(Number.parseInt(web3.utils.fromWei(balance, 'ether')));
        } catch (err) {
          console.log(err);
        }
      }
    };
    getAccountInfo();
  }, []);

  return (
      <Box basis="full" width="1200px" align="center" alignContent='center' alignSelf="center" pad="medium">
        {!account ? <Paragraph margin="small" textAlign='center'>Please connect metamask to get started</Paragraph> :
            step == 1 && (
                network == MUSICOIN_NETWORK_ID ?
                    account && currentBalance ?
                        <Box align="center" alignContent='center' alignSelf="center">
                          <Paragraph margin="small" textAlign='center'>Your wallet address is {account}</Paragraph>
                          <Paragraph margin="small" textAlign='center'>Your balance is {currentBalance} $MUSIC</Paragraph>
                          <TextInput
                              size="small"
                              icon="$"
                              value={amount}
                              onChange={event => setAmount(event.target.value)}
                          />
                          <PrimaryButton margin="5" onClick={migrate}>Convert to $MUS</PrimaryButton>
                          <Paragraph size="small" margin="medium" textAlign="center">Your Musicoin will be converted into $MUS in a ratio of 1000:1</Paragraph>
                        </Box> : null
                    : <Paragraph margin="small" textAlign='center'>Please select your Musicoin wallet in metamask</Paragraph>
            )}
        {
          step == 2 && (
              <Loading small/>
          )
        }
        {
          step == 3 && (
              <Box>
                <Paragraph margin="small" textAlign='center'>Switch to your $MUS wallet in metamask, the tokens will be added soon</Paragraph>
                <Button label="Migrate more funds" alignSelf='center' margin="medium" onClick={startOver}/>
              </Box>
          )
        }
      </Box>
  );
}

Migrate.Layout = Layout;

export default Migrate;
