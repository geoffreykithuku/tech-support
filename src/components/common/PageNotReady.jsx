

const PageNotReady = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-primary mb-4">Page Not Ready</h1>
      <p className="text-lg text-gray-700 mb-6">
        We're working hard to bring this page to you soon. Please check back
        later!
      </p>
      <button
        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-all duration-300"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotReady;
