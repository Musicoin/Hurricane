import React, {useState, useEffect} from 'react';
import Layout from '../components/MyLayout';
import web3 from '../web3';
import {Box, Text} from 'grommet';

function Migrate() {
  const MUSICOIN_NETWORK_ID = '7762959';
  const [network, setNetwork] = useState(0);
  const [account, setAccount] = useState('');
  const [currentBalance, setCurrentBalance] = useState('');

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
        } catch (err) {
          console.log(err);
        }
      }
    };
    getAccountInfo();
  }, []);

  return (
      <Box basis="full" width="1200px" align="center" alignContent='center' alignSelf="center" pad="medium">
        {!account ? <Text textAlign='center'>Please connect metamask to get started</Text> :
            network == MUSICOIN_NETWORK_ID ?
                <div>
                  {account && <Text textAlign='center'>Your wallet address is {account}</Text>}
                  {(account && currentBalance) && <Text textAlign='center'>Your balance is {currentBalance}</Text>}
                </div>
                : <Text textAlign='center'>Please select your Musicoin wallet in metamask</Text>
        }
      </Box>
  );
}

Migrate.Layout = Layout;

export default Migrate;
