import logo from './logo.svg';
import TestComponent from './components/TestComponent';
import Navbar from './components/NavBar';
import './App.scss';

function App() {
  const value = 10
  return (
    <div className="App" data-bs-theme="dark">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestComponent name='Test' number={value}/>
        <TestComponent name='Prueba' saludar={() => console.log("Hola mundo")} />
      </header>
    </div>
  );
}

export default App;
