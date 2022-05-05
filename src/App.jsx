
import { FooterComp, NavbarComp } from './components';
import ToggleTheme from './components/ToggleDarkMode';
import { MainRoute } from './config';
import './style/App.scss';

function App() {
  return (
    <>
      <div className="App  bg-base text-itam">
        <NavbarComp />
        <div className=" min-h-screen pt-6 ">

          <MainRoute />
        </div>
        <ToggleTheme />
        <FooterComp />
      </div>
    </>
  );
}

export default App;
