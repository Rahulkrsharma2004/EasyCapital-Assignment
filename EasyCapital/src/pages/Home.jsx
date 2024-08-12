const Home = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-9 bg-gray-100">
        <div className="flex flex-col items-center justify-center md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center md:text-left">
            Empower Your Dreams With Our Support
          </h2>
          <h4 className="text-base md:text-lg text-gray-600 mb-6 text-center md:text-left">
            Your trusted partner for hassle-free loans. With transparent processes
            and quick approvals,<br /> we empower your financial journey. Simplify
            borrowing with Easy Capital today.
          </h4>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Apply Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/two-men-are-shaking-hands-success-their-business-trending-concept-flat-illustration_720185-2215.jpg?w=826"
            alt="Business handshake"
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };
  
  export default Home;
  