import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.scss';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = props => {
  //   const filterChangeHandler = passedYear => {
  //     console.log(passedYear);
  //   };
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // Dumb components are components that do not contain any state

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear,
    //   == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values.
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
