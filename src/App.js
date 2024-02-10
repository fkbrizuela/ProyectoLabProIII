import logo from './logo.svg';
import TestComponent from './components/TestComponent';
import Navbar from './components/NavBar';
import './App.scss';
import  Card  from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import './styles/ItemListContainer.css';

function App() {
  const value = 10
  const saludar = () => console.log("Hola mundo")
  return (
    <div className="App" data-bs-theme="dark">
      <Navbar/>
      <ItemListContainer greeting ={"una prop"}/>
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
        <TestComponent name='Prueba' /*saludar={() => console.log("Hola mundo")}*/ />
        <TestComponent saludar={saludar}/>
        <Card>
          <TestComponent name='Children'/>
        </Card>
      </header>
    </div>
  );
}

export default App;
