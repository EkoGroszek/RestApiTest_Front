import {IAccounts} from './accounts';

export class ExternalTransfer {

  amount: string;

  bankName: string;

  currency: string;

  externalAccount: string;

  toAccount: string;

  emailAddress: string;

  ifSendEmail: boolean;

  constructor() {
  }
}
