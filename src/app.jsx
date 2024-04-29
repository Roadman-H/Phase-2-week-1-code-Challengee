// App.js
import React, { useState } from 'react';
import TransactionTable from './transactionTable';
import TransactionForm from './transactionForm';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Welcome to the Bank Transactions</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;