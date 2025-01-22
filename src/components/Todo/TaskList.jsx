const TaskList = ({ handleDeleteTask, tasks, getPriorityColor }) => {
  return (
      <div className="mt-8">
          <div className="mt-8 space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow border"
            >
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <span className="text-gray-800">{task.title}</span>
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="px-3 py-1 text-red-600 hover:bg-red-100 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
      
  );
};

export default TaskList;

