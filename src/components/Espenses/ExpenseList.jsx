import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ items, filterProp }) {
    const filterVals = items.filter(e => e.date.getFullYear() === Number(filterProp));

    if (filterVals.length === 0)
        return <h2 className='expenses-list__fallback'>No expense found</h2>

    return (
        <ul className='expenses-list'>
            {
                filterVals.map(e => <ExpenseItem exp={e} key={e.id} />)
            }
        </ul>
    );
}

export default ExpenseList;