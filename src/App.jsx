import Images from './components/Images';
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';

function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=office&client_id=I6dXYYNPlW4_U6UZ1fvQsgrW1oWpTEQRmM7-g4XeU5U`
  );
  console.log(response);

  return (
    <>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </>
  );
}

export default App;
