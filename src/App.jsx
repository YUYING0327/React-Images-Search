import Images from './components/Images';
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';

function App() {
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
