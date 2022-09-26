
import React, { useState } from 'react'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import HeroExpenses from "./components/HeroExpenses";


const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 194.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Internet Plan',
    amount: 69.99,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e6',
    title: 'Phone Plan',
    amount: 20,
    date: new Date(2022, 1, 12),
  },
  {
    id: 'e7',
    title: 'Insurance',
    amount: 400,
    date: new Date(2021, 3, 12),
  },
  {
    id: 'e8',
    title: "Water Bill",
    amount: 80,
    date: new Date(2022, 7, 12),
  },

];


function App() {

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  

  return (
    <div>
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <Expenses items={expenses}/>
      <HeroExpenses />
    </div>
  );
}

export default App;
