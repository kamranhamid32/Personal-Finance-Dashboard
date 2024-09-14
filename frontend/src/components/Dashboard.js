// src/components/Dashboard.js
import React, { useState } from 'react';

function Dashboard() {
  // Sample state to store financial data
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState(2000);
  const [income, setIncome] = useState(7000);

  return (
    <div>
      <h1>Personal Finance Dashboard</h1>
      <div>
        <h2>Balance: ${balance}</h2>
        <h2>Expenses: ${expenses}</h2>
        <h2>Income: ${income}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
