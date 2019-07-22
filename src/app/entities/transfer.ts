import {IAccounts} from './accounts';

export class Transfer {
  // sendingAccountNumber: string;

  sendingAccount: IAccounts;

  amount: number;

  // targetAccountNumber: string;

  targetAccount: IAccounts;

  dateOfSendingTransfer: string;

  dateOfPostingTransfer: string;

  status: string;

  constructor() {
  }
}
