

import ToggleTheme from './components/ToggleDarkMode';
import { MainRoute } from './config';
import './style/App.scss';

function App() {
  return (
    <>
      <div className="App  bg-base text-itam">

        <div className='min-h-screen'>

          <MainRoute />
        </div>

      </div>
    </>
  );
}

export default App;
