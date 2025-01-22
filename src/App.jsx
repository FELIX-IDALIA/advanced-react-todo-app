// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
//import Login from './components/Auth/Login';
//import TodoApp from './components/Todo/TodoApp';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import TodoAppPage from './components/pages/TodoAppPage';
import LoginPage from './components/pages/LoginPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            {/*<Route path="/" element={<Login />} />*/}
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/todos"
              element={
                <ProtectedRoute>
                  <TodoAppPage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} /> 

            
            {/* Redirect root to todos */}
            {/*<Route path="/" element={<Navigate to="/todos" replace />} /> */}
            {/* Catch all other routes and redirect to todos */}
            {/*<Route path="*" element={<Navigate to="/todos" replace />} />*/}

          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;