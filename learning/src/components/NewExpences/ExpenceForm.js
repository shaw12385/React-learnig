import React,{useState} from 'react'
import '../NewExpences/ExpenceForm.css'
const ExpenceForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setuserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });
        // setuserInput(
        //     (prevState)=>{
        //         return {
        //             ...prevState, enteredTitle:event.target.value
        //         }
        //     }
        // )
    }

    const amountChanges = (event) =>{
        setEnteredAmount(event.target.value);
        // setuserInput(
        //     (prevState)=>{
        //         return {
        //             ...prevState, enteredAmount:event.target.value
        //         }
        //     }
        // )
    }

    const dateChanges = (event) =>{
        setEnteredDate(event.target.value);
        // setuserInput(
        //     (prevState)=>{
        //         return {
        //             ...prevState, enteredDate:event.target.value
        //         }
        //     }
        // )
    }
const submitHandler = (event) => {
    event.preventDefault();
    const expenceData  = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
    props.onSaveExpenceData(expenceData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
}
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChanges}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2021-01-01" max="2023-12-31" onChange={dateChanges}/>
            </div>
        </div>
        <div className="new-expense__actions"> 
            <button type="submit">Add Expence</button>
        </div>
    </form>
    );
}

export default ExpenceForm;