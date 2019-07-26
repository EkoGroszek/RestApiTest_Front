import {IAccounts} from './accounts';

export class Transfer {
  // sendingAccountNumber: string;

  sendingAccount: IAccounts;

  amount: number;

  targetAccount: IAccounts;

  dateOfSendingTransfer: string;

  dateOfPostingTransfer: string;

  status: string;

  emailAddress: string;

  ifSendEmail: boolean;

  constructor() {
  }
}
