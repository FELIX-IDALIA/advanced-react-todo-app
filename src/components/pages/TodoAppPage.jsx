//import TaskInput from '../Todo/TaskInput';
//import TaskList from '../Todo/TaskList';
//import LoginOne from '../Auth/LoginOne';
//import WeatherApi from '../weather/WeatherApi';
import { logout } from '../../store/authSlice';
import WeatherWidget from '../weather/WeatherWidget';
import { useNavigate } from "react-router-dom";
import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/todoSlice';
import TaskInput from '../Todo/TaskInput';
import TaskList from '../Todo/TaskList';
import SignOut from '../auth/SignOut';
import { deleteTask, } from '../../store/todoSlice';

const TodoAppPage = () => {
    const navigate = useNavigate();

    {/* TaskListOne */}
    const tasks = useSelector((state) => state.todos.tasks);
    const dispatch = useDispatch();
  
    
    const getPriorityColor = (priority) => {
      const colors = {
        high: 'bg-red-100 text-red-800',
        medium: 'bg-yellow-100 text-yellow-800',
        low: 'bg-green-100 text-green-800'
      };
      return colors[priority] || colors.medium;
    };
  


    {/* TaskInputOne */}
    const [task, setTask] = useState({ title: '', priority: 'medium' });
    

    const handleAddTask = (e) => {
        e.preventDefault();
        if (task.title.trim()) {
        dispatch(addTask({ ...task, id: Date.now() }));
        setTask({ title: '', priority: 'medium' });
    }
  };

  {/* Handle logoOut*/}
  const handleLogOut = () => {
    dispatch(logout());
    navigate('/login');
  };

  {/* Handle delete tash*/}
  const handleDeleteTask = (taskId) => dispatch(deleteTask(taskId));




    return (
        
            <div className="min-h-[500px] bg-gray-50 p-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <SignOut handleLogOut={handleLogOut}/>
                        {/*<WeatherApi />*/}
                        <WeatherWidget />
                        <TaskInput task={task} handleAddTask={handleAddTask} setTask={setTask}/>
                        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} getPriorityColor={getPriorityColor}/>
                    </div>

                </div>
            </div>

            
        
    );
};

export default TodoAppPage;