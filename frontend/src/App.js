import React from 'react';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Transactions />
      <Budgets />
    </div>
  );
}

export default App;
