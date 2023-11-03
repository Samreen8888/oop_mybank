class BankAccount {
    private accountNumber: string;
    private balance: number;
  
    constructor(accountNumber: string, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Insufficient funds.");
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  class BankCustomer {
    private name: string;
    private accounts: BankAccount[];
  
    constructor(name: string) {
      this.name = name;
      this.accounts = [];
    }
  
    addAccount(account: BankAccount): void {
      this.accounts.push(account);
    }
  
    getAccounts(): BankAccount[] {
      return this.accounts;
    }
  }
  
  // Usage Example
  const customer1 = new BankCustomer("John Doe");
  const account1 = new BankAccount("12345", 1000);
  const account2 = new BankAccount("67890", 1500);
  
  customer1.addAccount(account1);
  customer1.addAccount(account2);
  
  console.log(`Customer: ${customer1.getAccounts()[0]}`);
  account1.deposit(500);
  account2.withdraw(200);
  
  console.log(`Customer's Accounts:`);
  for (const account of customer1.getAccounts()) {
    console.log(`Account Number: ${account['accountNumber']}, Balance: $${account['getBalance']()}`);
  }
  