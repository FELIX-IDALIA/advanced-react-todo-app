import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Protected from './components/auth/Protected';
import TodoAppPage from './components/pages/TodoAppPage';
import LoginPage from './components/pages/LoginPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/todos"
              element={
                <Protected>
                  <TodoAppPage />
                </Protected>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace/>}/> 

            {/*Fallback for undefined routes*/}
            <Route path="*" element={<Navigate to="/login" replace/>}/>

          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;