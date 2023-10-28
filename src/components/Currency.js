import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Budget from './Budget';

const Currency = (props) => {
   const { currencies } = useContext(AppContext);

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('$');
    //const [icon, setIcon] = useState('');
   // const [cost, setCost] = useState('');
   // const [action, setAction] = useState('');

   /* const submitEvent = () => {


        const expense = {
            name: name,
            cost: parseInt(cost),
        };
    }; */

    const handleChangeCurrency = (event) => {
         const selectedCurrency = JSON.parse(event.target.value);
        setName(selectedCurrency.name);
        setIcon(selectedCurrency.icon);
        //console.log(selectedCurrency.icon);
    };

    return (
        <div>
          <Budget icon={icon} name={name}/>
            <div className='row'>

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
    );
};

export default Currency;