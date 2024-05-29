import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import IntroductionSound from './components/IntroductionSound';

function App() {
  return (
    <>
    <IntroductionSound/>
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
