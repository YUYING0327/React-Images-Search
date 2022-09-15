import { createContext } from 'react';
import Images from './components/Images';
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';

// Create Context
export const ImageContext = createContext();

function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=I6dXYYNPlW4_U6UZ1fvQsgrW1oWpTEQRmM7-g4XeU5U`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
  };

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
