import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesChart from "./ExpenseChart"
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';


function Expenses (props) {

    const [filteredYear, setFilteredYear] = useState('2022'); //Setting opening expenses to current year

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/> 
                {filteredExpenses.length === 0 && <p>No expenses found.</p> }
                {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                    <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />
                    ))}
            </Card>
        </div>
    )
   
}

export default Expenses;