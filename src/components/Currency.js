import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
   const { currencies } = useContext(AppContext);

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
   // const [cost, setCost] = useState('');
   // const [action, setAction] = useState('');

   {/* const submitEvent = () => {


        const expense = {
            name: name,
            cost: parseInt(cost),
        };
    }; */}

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem', color:'white', backgroundColor:'green'}}>
                    <div className="input-group-prepend" >
                <label className="input-group-text" htmlFor="inputGroupSelect01" style={{color:'white', backgroundColor:'green'}}>Currency(£ Pound)</label>
                  
                  <select style={{color:'white', backgroundColor:'green'}} className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>{name}</option>
                        {currencies.map((currency) => (
                       <option value={currency.value} ></option>
            ))}
                  </select>
                  </div>
                 
                </div>
                </div>
        </div>
    );
};

export default Currency;