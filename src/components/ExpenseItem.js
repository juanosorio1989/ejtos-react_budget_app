import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { HiMinusCircle } from 'react-icons/hi';
//import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FcPlus } from 'react-icons/fc';


const ExpenseItem = (props) => {
    const currency = props.icon;
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={{backgroundColor:'transparent', borderBlockColor:'transparent', borderWidth:'0'}} ><FcPlus style={{color:'white', width:'2em', height:'2em'}}></FcPlus></button></td>
        <td><button style={{backgroundColor:'transparent', borderBlockColor:'transparent', borderWidth:'0'}}><HiMinusCircle style={{ color:'red', width:'2em', height:'2em'}}   onClick={handleDeleteExpense}></HiMinusCircle></button></td>
        </tr>
    );
};

export default ExpenseItem;
