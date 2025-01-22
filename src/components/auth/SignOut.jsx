const SignOut = ({handleLogOut}) => {
  return (
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">To-Do</h1>
        <button
          onClick={handleLogOut}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-200"
        >
          Logout
        </button>
      </div>
    );
  };
  
  export default SignOut;