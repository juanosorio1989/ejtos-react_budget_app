import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        
        if(newBudget > remaining) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            setNewBudget(remaining);
           return;
        }else if(newBudget < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending £");
        }else{
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budet: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
