"use strict";
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class BankCustomer {
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }
    addAccount(account) {
        this.accounts.push(account);
    }
    getAccounts() {
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
