import logo from "./logo.svg";
import TestComponent from "./components/TestComponents/TestComponent";
import Navbar from "./components/NavBar";
import "./App.scss";
import Card from "./components/TestComponents/Card";
import ItemListContainer from "./components/ItemListContainer";
import "./styles/ItemListContainer.css";
import FuntionalTestComponent from "./components/TestComponents/FuntionalTestComponent";
/* import ItemCount from "./components/ItemCount"; */
import CounterDate from "./components/TestComponents/CounterDate";
import CountriesContainer from "./components/TestComponents/CountriesContainer";
import MapComponent from "./components/TestComponents/MapComponent";
import { Container } from "react-bootstrap";
import ApisContainer from "./components/APIS/ApisContainer";
import MoviesContainer from "./components/Movies/MoviesContainer"

function App() {
  const value = 10;
  const saludar = () => console.log("Hola mundo");
  return (
    <div className="App" data-bs-theme="dark">
      <Navbar />
      <Container>
        <ItemListContainer greeting={"Bienvenidos!"} />
      </Container>
     {/*  <ItemCount stock={5} initial={1} /> */}
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
        <TestComponent name="Test" number={value} />
        <TestComponent
          name="Prueba" /*saludar={() => console.log("Hola mundo")}*/
        />
        <TestComponent saludar={saludar} />
        <Card>
          <TestComponent name="Children" />
          <h3>un children también puede ser jsx/html</h3>
        </Card>
        <FuntionalTestComponent
          newComponent={TestComponent}
        ></FuntionalTestComponent>
        <CounterDate />
        <CountriesContainer />
        <MapComponent />
        <ApisContainer/>
      </header>
      <MoviesContainer/>
    </div>
  );
}

export default App;
