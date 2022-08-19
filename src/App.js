import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import './main.scss'

function App() {
  return (
    <div className="layout">
      <div className='main-content'>
        <Header />
        <Main />
      </div>     
    </div>
  );
}

export default App;
