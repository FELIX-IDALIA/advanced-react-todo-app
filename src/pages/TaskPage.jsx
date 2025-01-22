import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import axios from 'axios';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [weather, setWeather] = useState(null);
  const [showTaskInput, setShowTaskInput] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filterTasks = () => {
    if (filter === 'All') return tasks;
    return tasks.filter((task) => task.priority === filter);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: 'Nairobi',
              appid: 'YOUR_API_KEY',
            },
          }
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative">
      {/* Main Card */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Tasks
        </h1>
        {weather && (
          <p className="text-center text-sm sm:text-base text-gray-600 mb-6">
            Current Weather: {weather.weather[0].description}
          </p>
        )}

        {/* Filter Buttons */}
        <div className="flex justify-between gap-4 mb-6 w-full border-b-2 border-gray-200 pb-4">
          {['All', 'High', 'Medium', 'Low'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`text-sm sm:text-base font-medium ${
                filter === category
                  ? 'underline underline-offset-4 text-blue-500'
                  : 'text-gray-700 hover:text-blue-500'
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="w-full mb-6">
          <TaskList tasks={filterTasks()} deleteTask={deleteTask} />
        </div>

        {/* Task Input Section */}
        {showTaskInput && (
          <div className="w-full max-w-md">
            <TaskInput addTask={addTask} />
          </div>
        )}
      </div>

      {/* Toggle Task Input Button */}
      <button
        onClick={() => setShowTaskInput((prev) => !prev)}
        className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center fixed bottom-4 left-4 hover:bg-blue-400 transition shadow-lg"
      >
        {showTaskInput ? '-' : '+'}
      </button>
    </div>
  );
};

export default TasksPage;
















{/*
import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import axios from 'axios';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [weather, setWeather] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: 'Nairobi',
              appid: 'YOUR_API_KEY',
            },
          }
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl text-center font-semibold mb-6">Tasks</h1>
      {weather && <p className="text-center text-lg mb-6">Current Weather: {weather.weather[0].description}</p>}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default TasksPage; */}
