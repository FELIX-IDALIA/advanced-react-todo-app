const TaskInput = ({ setTask, handleAddTask, task }) => {
  return (
      <form onSubmit={handleAddTask} className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              placeholder="Add a new task"
              className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Add
            </button>
          </div>
        </form>
  );
};

export default TaskInput;








