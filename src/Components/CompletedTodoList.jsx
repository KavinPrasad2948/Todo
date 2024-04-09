import PropTypes from 'prop-types';

function CompletedTodoList({ completedTodos, onDelete }) {
  return (
    <div className="todo-list">
      {completedTodos.map((item, index) => (
        <div className="todo-list-item" key={index}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><small>Completed on: {item.completedOn}</small></p>
          </div>
          <div>
            <button className="icon" onClick={() => onDelete(index)} title="Delete">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

CompletedTodoList.propTypes = {
  completedTodos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CompletedTodoList;
