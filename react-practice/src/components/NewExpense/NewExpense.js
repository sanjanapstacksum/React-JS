import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (prop)=>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id :Math.random().toString()

        }
        prop.onAddExpense(expenseData)


    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;