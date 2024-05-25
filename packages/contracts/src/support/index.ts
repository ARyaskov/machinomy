import { BigNumber } from 'bignumber.js'
import * as truffle from 'truffle-contract'
import * as Web3 from 'web3'

export async function txPrice (web3: Web3, log: truffle.TransactionResult): Promise<BigNumber> {
  return new BigNumber((await web3.eth.getTransaction(log.tx)).gasPrice).multipliedBy(log.receipt.gasUsed)
}
