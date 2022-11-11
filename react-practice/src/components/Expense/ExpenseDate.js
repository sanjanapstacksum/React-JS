
import './ExpenseDate.css'

function ExpenseDate(prop){
    const day = prop.date.toLocaleString('en-US',{month :"long"});
    const date = prop.date.toLocaleString('en-US',{day :"2-digit"});
    const year = prop.date.getFullYear();

    return(
        <div className="expense-date">
        <div className="expense-date__month">{day}</div>
        <div className="expense-date__day">{date}</div>
        <div className="expense-date__year">{year}</div>
        </div>
    )
}
export default ExpenseDate;