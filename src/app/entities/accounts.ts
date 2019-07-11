import {Owner} from './owner';

export class IAccounts {
  id: number;
  accountNumber: string;
  balance: number;
  owner: Owner;
  currency: string;
  name: string;


  constructor() {
  }
}
