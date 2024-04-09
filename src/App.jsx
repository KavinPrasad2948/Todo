import { useState } from "react";
import "./App.css";
import "./css/style.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import CompletedTodoList from "./Components/CompletedTodoList";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
   
  

  const handleAddTodo = (newTodo) => {
    setTodos([...allTodos, newTodo]);
    localStorage.setItem("todolist", JSON.stringify([...allTodos, newTodo]));
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = `${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`;

    let filteredItem = { ...allTodos[index], completedOn };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  };

  const handleEdit = (index, updatedItem) => {
    // Prompt the user for new title
    let newTitle = prompt("Enter new title:", updatedItem.title);

    // Check if the user cancelled the prompt or input an empty string
    if (newTitle === "" || newTitle.trim() === "") {
      newTitle = updatedItem.title; // Keep the original title
    }

    // Prompt the user for new description
    let newDescription = prompt(
      "Enter new description:",
      updatedItem.description
    );

    // Check if the user cancelled the prompt or input an empty string
    if (newDescription === "" || newDescription.trim() === "") {
      newDescription = updatedItem.description; // Keep the original description
    }

    // Create a copy of the current todos array
    const updatedTodos = [...allTodos];

    // Replace the item at the specified index with the updatedItem
    updatedTodos[index] = {
      ...updatedItem,
      title: newTitle,
      description: newDescription,
    };

    // Update the todos state with the updated array
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <div className="btn-area">
        <button
          className={`secondaryBtn ${isCompleteScreen === false && "active"}`}
          onClick={() => setIsCompleteScreen(false)}
        >
          Not Completed
        </button>
        <button
          className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
          onClick={() => setIsCompleteScreen(true)}
        >
          Completed
        </button>
        
      </div>
      {isCompleteScreen === false && (
        <TodoList
          todos={allTodos}
          onDelete={handleDeleteTodo}
          onComplete={handleComplete}
          onEdit={handleEdit}
        />
      )}
      {isCompleteScreen === true && (
        <CompletedTodoList
          completedTodos={completedTodos}
          onDelete={handleDeleteCompletedTodo}
        />
      )}
    </div>
  );
}

export default App;
