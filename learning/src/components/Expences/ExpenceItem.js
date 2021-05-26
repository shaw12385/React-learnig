import ExpenceDate from '../Expences/ExpenceDate';
import Cards from '../UI/Cards';
import '../Expences/Expenceitem.css';
function ExpenseItem(props) {
    
  return (
    <Cards className="expense-item">
      <div>
        <ExpenceDate PassDate={props.date}/> 
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
