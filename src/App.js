import logo from "./logo.svg";
import TestComponent from "./components/TestComponents/TestComponent";
import Navbar from "./components/NavBar";
import "./App.scss";
import Card from "./components/TestComponents/Card";
import ItemListContainer from "./components/Market/ItemListContainer";
import "./styles/ItemListContainer.css";
import FuntionalTestComponent from "./components/TestComponents/FuntionalTestComponent";
/* import ItemCount from "./components/ItemCount"; */
import CounterDate from "./components/TestComponents/CounterDate";
import CountriesContainer from "./components/TestComponents/CountriesContainer";
import MapComponent from "./components/TestComponents/MapComponent";
import { Container } from "react-bootstrap";
import ApisContainer from "./components/APIS/ApisContainer";
import MoviesContainer from "./components/Movies/MoviesContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from "./components/Market/ItemCount";
import MovieDetail from "./components/Movies/MovieDetail";
import ItemDetailContainer from "./components/Market/ItemDetailContainer";
import Cart from "./components/Market/Cart";
import Checkout from "./components/Market/Checkout";

function App() {
/*   const value = 10;
  const saludar = () => console.log("Hola mundo"); */
  return (
    <div className="App" data-bs-theme="dark">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos!"} />}></Route>
          <Route path='/Productos' element={<ItemListContainer greeting={"Bienvenidos!"} />}></Route>
          <Route path='/Category/:CategoryName' element={<ItemListContainer greeting={"Bienvenidos!"}/>} ></Route>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Checkout' element={<Checkout/>}></Route>
          <Route path='/Peliculas' element={<MoviesContainer/>}></Route>
          <Route path='/Peliculas/:movieId' element={<MovieDetail/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}// ':' los dos puntos le indica que es un valor que puede llegar a variar recuperandolo con el hook useParams

export default App;
