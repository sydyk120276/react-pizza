import './App.scss';

import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Main from './components/Main/main';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Menu />
        <Main />
      </div>
    </div>
  );
}

export default App;
