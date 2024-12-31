

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Overview</h1>
      <div className="flex items-center space-x-4">
        
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <img src="/profile.jpg" />
      </div>
    </div>
  );
};

export default Header;
