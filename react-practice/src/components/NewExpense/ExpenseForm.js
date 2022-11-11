import { useState } from "react";
import "./ExpenseForm.css";

const intialError = {
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
};
const ExpenseForm = (prop) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [errors, setErrors] = useState({...intialError});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    setErrors(intialError);
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log("enteredDate ", enteredDate, enteredAmount, enteredTitle);
    var isValid = true;
   
    if(!enteredDate || !enteredAmount || enteredTitle === "" )
    {
        setErrors({enteredDate : !enteredDate ? "Please Enter Date" : "",enteredAmount: !enteredAmount ? "Please Enter Amount" : '', enteredTitle: !enteredTitle ? "Please Enter Title" : '' })
        isValid = false
    }

    console.log("expenseData ", expenseData);
    if (isValid) {
      prop.onSaveExpenseData(expenseData);
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTitle("");
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          {console.log("errors?.enteredTitle ", errors?.enteredTitle)}
          <lable>Title</lable>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        
            <span style={{ color: "red" }}>{errors?.enteredTitle}</span>
         
        </div>
        <div className="new-expense__control">
          {console.log("errors?.enteredAmount ", errors?.enteredAmount)}
          <lable>Amount</lable>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
          
            <span style={{ color: "red" }}>{errors?.enteredAmount}</span>
        
        </div>
        <div className="new-expense__control">
          {console.log("errors?.enteredDate ", errors?.enteredDate)}
          <lable>Date</lable>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
          {errors?.enteredDate !== "" && (
            <span style={{ color: "red" }}>{errors?.enteredDate}</span>
          )}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
