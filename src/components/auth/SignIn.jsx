import { AlertCircle } from "lucide-react";

const SignIn = ({handleLogin, credentials, setCredentials, error}) => {
    
        return (
          <div className="min-h-[500px] flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md space-y-6 p-8 bg-white rounded-lg shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Login</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Enter any username and password to continue.
                </p>
              </div>
              
              <form onSubmit={handleLogin} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                </div>
                
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-700">
                    <AlertCircle size={16} />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        );
      
};

export default SignIn;