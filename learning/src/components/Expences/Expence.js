import Cards from '../UI/Cards'
import ExpenseItem from '../Expences/ExpenceItem';
import '../Expences/Expence.css'

function Expence(props){
    return (
        <Cards className="expenses">
           <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
           <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
           <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
           <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        </Cards>
        );
}
export default Expence;