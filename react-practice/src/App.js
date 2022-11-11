import Expenses from "./components/Expense/Expense";
import React,{ useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const dummy_expenses= [
    {id:'e1', title: "Nano", amount: 296.67, date: new Date(2022, 4, 11) },
    {id:'e2', title: "Swift", amount: 239.67, date: new Date(2022, 4, 12) },
    { id:'e3',title: "Baleno", amount: 249.67, date: new Date(2022, 4, 14) },
    
  ];
  const [expenses,setExpenses] = useState(dummy_expenses)

  
  const addExpenseHandler = expense =>{
   setExpenses(prevExpenses=>{
    return [expense,...prevExpenses]
   });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
