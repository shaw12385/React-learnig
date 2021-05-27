import React from 'react';
import ExpenceForm from './ExpenceForm';
import './NewExpence.css';
const NewExpence = (prosp) =>{
    const saveExpenceDataHandler = (enterExpenceData) => {
        const expenceData = {
            ...enterExpenceData,
            id: Math.random().toString()
        }
        prosp.onAddExpence(expenceData);
    }
    return (
        <div className="new-expense">
            <ExpenceForm  onSaveExpenceData={saveExpenceDataHandler} />
        </div>
    );
}
export default NewExpence;