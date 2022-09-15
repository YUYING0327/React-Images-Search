const SearchField = () => {
  return (
    <div className='flex'>
      <input
        className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-l'
        type='search'
        placeholder='Search Anything...'
      />
      <button className='bg-blue-600 px-6 py-2.5 text-white rounded-r focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed'>
        Search
      </button>
    </div>
  );
};

export default SearchField;
