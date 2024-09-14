import React, { useState, useEffect } from 'react';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.amount} - {transaction.category} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
