
import { PropTypes } from 'prop-types';

function TodoList({ todos, onDelete, onComplete, onEdit }) {
  return (
    <div className="todo-list">
      {todos.map((item, index) => (
        <div className="todo-list-item" key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div>
            <button className="delete-btn" onClick={event => onDelete(index, event)} title="Delete">
              Delete
            </button>
            <button className="complete-btn" onClick={event => onComplete(index, event)} title="Complete">
              Complete
            </button>
            <button className="edit-btn" onClick={event => onEdit(index, event)} title="Edit">
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}
export default TodoList;