import { React, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


const initialData = {
  title: "",
};
function AddTodo() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState({ ...initialData });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(initialData);
    var isValid = true;
    if (!title) {
    
      setError({
        title: !title ? "Please Enter Your Text" : "",
      });
      isValid = false;
    }
    if (isValid) {
      await addDoc(collection(db, "todos"), {
        title,
        Completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <span style={{ color: "red"}}>{error?.title}</span>
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
}

export default AddTodo;
