import { useContext, useState } from 'react';
import { ImageContext } from '../App';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState('');
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=I6dXYYNPlW4_U6UZ1fvQsgrW1oWpTEQRmM7-g4XeU5U`
    );
    setSearchValue('');
  };

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=I6dXYYNPlW4_U6UZ1fvQsgrW1oWpTEQRmM7-g4XeU5U`
      );
      setSearchValue('');
      setSearchImage(searchValue);
    }
  };

  return (
    <div className='flex'>
      <input
        className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-l'
        type='search'
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        placeholder='Search Anything...'
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className='bg-blue-600 px-6 py-2.5 text-white rounded-r focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed'
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
