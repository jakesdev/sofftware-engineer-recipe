export class BankAccount {
  private money = 0;
  private transactionHistory: TransactionHistory[] = [];

  deposit(money: number) {
    this.money += money;
    const depositHistory: TransactionHistory = {
      action: 'deposit',
      money: money,
      time: new Date(),
    };
    this.transactionHistory.push(depositHistory);
  }

  withdraw(money: number) {
    if (money > this.money) {
      console.error("You don't have enough money to withdraw \n");
      return;
    }
    this.money -= money;
    const withdrawHistory: TransactionHistory = {
      action: 'withdraw',
      money: money,
      time: new Date(),
    };
    this.transactionHistory.push(withdrawHistory);
  }

  getAccountBalance() {
    return this.money;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

export class TransactionHistory {
  action!: string;
  money!: number;
  time!: Date;
}

console.log(`====Encapsulation Principle====`);
console.log(`
The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:
 + declare class variables/attributes as private
 + provide public get and set methods to access and update the value of a private variable
`);

console.log(`Code example: '\n'`);

const bankAccount = new BankAccount();

// cant get and set bankAccount.money
// money variable in bankAccount only accessible by withdraw(), deposit(), getAccountBalance() method

bankAccount.withdraw(10); // current 0
bankAccount.deposit(10); // current 10
bankAccount.withdraw(5); // current 5

bankAccount.deposit(10); // current 15
bankAccount.withdraw(11); // current 4
console.log(
  'Current Account Balance: ' + bankAccount.getAccountBalance() + '\n',
);
const transactionHistory = bankAccount.getTransactionHistory();

for (const history of transactionHistory) {
  console.log(
    formatDate(history.time) +
      ': ' +
      history.action +
      ' ' +
      history.money +
      '\n',
  );
}

function formatDate(date: Date) {
  return date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
