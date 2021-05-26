import '../Expences/ExpenceDate.css'
function ExpenceDate(props){
    const month = props.PassDate.toLocaleString('en-US', {month: 'long'});
    const day = props.PassDate.toLocaleString('en-US', {day: '2-digit'});
    const Year = props.PassDate.getFullYear();
    return(
    <div className='expense-date'>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{Year}</div>
    </div>
    );
}

export default ExpenceDate;