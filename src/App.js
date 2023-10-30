import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AppContext } from './context/AppContext'
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
//import Currency from './components/Currency';

const App = () => {
    const  currencies  = [ {id:"$ Dollar",value: '$ Dollar', name:'$ Dollar', icon:'$'},
    {id:"£ Pound",value: '£ Pound', name:'£ Pound', icon:'£'},
    {id:"€ Euro",value: '€ Euro', name:'€ Euro', icon:'€'},
    {id:"₹ Ruppee",value: '₹ Ruppee', name:'₹ Ruppee', icon:'₹'},];

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('$');

    const handleChangeCurrency = (event) => {
        const selectedCurrency = JSON.parse(event.target.value);
       setName(selectedCurrency.name);
       setIcon(selectedCurrency.icon);
       //console.log(selectedCurrency.icon);
   };



    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget icon={icon}/>
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget icon={icon}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal icon={icon}/>
                    </div>
                    <div className='col-sm'>
                    <div className='col-sm'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem', color:'white', backgroundColor:'green'}}>
                    <div className="input-group-prepend" >
               
 <label className="input-group-text" htmlFor="inputGroupSelect01" style={{color:'white', backgroundColor:'green'}}>
     Currency {name} 
     </label>
                </div>
                  <select style={{color:'white', width: '100%', backgroundColor:'green'}} className="custom-select" id="inputGroupSelect01" onChange={handleChangeCurrency}>
                        {/*<option defaultValue style={{color:'whitesmoke'}}>{name}</option>*/}
                        {currencies.map((currency) => (
                       <option key={currency.id} value={JSON.stringify(currency)} style={{color:'whitesmoke'}}>{currency.name}</option>
            ))}
                  </select>
                  
                 
                </div>
                </div>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList icon={icon}/>
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm icon={icon}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;