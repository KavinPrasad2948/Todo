import { PropTypes } from 'prop-types';
import { useState} from 'react';


function TodoInput({ onAddTodo }) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddTodo = () => {
    if (newTitle && newDescription) {
      onAddTodo({
        title: newTitle,
        description: newDescription,
      });
      setNewTitle('');
      setNewDescription('');
    }
  };

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label className='title'>Title</label>
        <input
          className='input'
          type="text"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          placeholder="What's the task title?"
        />
      </div>
      <div className="todo-input-item">
        <label className='title'>Description</label>
        <input
          className='input'
          type="text"
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          placeholder="What's the task description?"
        />
      </div>
      <div className="todo-input-item">
        <button type="button" onClick={handleAddTodo} className="primaryBtn">
          Add
        </button>
      </div>
    </div>
  );
}
TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

export default TodoInput;