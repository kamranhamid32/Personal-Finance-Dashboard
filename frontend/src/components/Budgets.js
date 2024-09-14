import React, { useState } from 'react';

function Budgets() {
  const [budgets, setBudgets] = useState([
    { category: 'Groceries', limit: 500, spent: 300 },
    { category: 'Rent', limit: 1000, spent: 1000 },
    { category: 'Entertainment', limit: 200, spent: 50 }
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [newLimit, setNewLimit] = useState('');

  const handleAddBudget = () => {
    setBudgets([
      ...budgets,
      { category: newCategory, limit: parseFloat(newLimit), spent: 0 }
    ]);
    setNewCategory('');
    setNewLimit('');
  };

  return (
    <div>
      <h2>Budgets</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Budget Limit</th>
            <th>Amount Spent</th>
            <th>Remaining</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget, index) => (
            <tr key={index}>
              <td>{budget.category}</td>
              <td>${budget.limit}</td>
              <td>${budget.spent}</td>
              <td>${budget.limit - budget.spent}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h3>Add New Budget</h3>
        <input
          type="text"
          placeholder="Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Limit"
          value={newLimit}
          onChange={(e) => setNewLimit(e.target.value)}
        />
        <button onClick={handleAddBudget}>Add Budget</button>
      </div>
    </div>
  );
}

export default Budgets;
