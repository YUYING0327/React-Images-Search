const Jumbutron = ({ children }) => {
  return (
    <div className='bg-gray-900 flex items-center py-10'>
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-center text-2xl font-bold mb-5'>{children}</h1>
      </div>
    </div>
  );
};

export default Jumbutron;
