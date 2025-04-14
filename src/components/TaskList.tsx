export const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-4 bg-white dark:bg-base-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onTaskComplete(task.id)}
              className="w-5 h-5 text-primary-500 rounded border-gray-300 focus:ring-primary-500"
            />
            <span className={`text-base-800 dark:text-base-100 ${task.completed ? 'line-through text-base-500 dark:text-base-400' : ''}`}>
              {task.text}
            </span>
          </div>
          <button
            onClick={() => onTaskDelete(task.id)}
            className="text-base-500 hover:text-red-500 dark:text-base-400 dark:hover:text-red-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}; 