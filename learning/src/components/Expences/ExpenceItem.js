import React,{ useState } from 'react'
import ExpenceDate from "../Expences/ExpenceDate";
import Cards from "../UI/Cards";
import "../Expences/Expenceitem.css";
function ExpenseItem(props) {
  
  const [title, setTitle] = useState(props.title);
  
  const clickedHandler = () => {
    setTitle('');
    console.log("Clicked!!!!");
    setTitle('updated '+ title);
  };
  return (
    <Cards className="expense-item">
      <div>
        <ExpenceDate PassDate={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickedHandler}>Change Title</button>
    </Cards>
  );
}

export default ExpenseItem;
