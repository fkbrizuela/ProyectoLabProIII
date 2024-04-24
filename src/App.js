import Navbar from "./components/NavBar";
import "./App.scss";
import ItemListContainer from "./components/Market/ItemListContainer";
import "./styles/ItemListContainer.css";
import MoviesContainer from "./components/Movies/MoviesContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/Movies/MovieDetail";
import ItemDetailContainer from "./components/Market/ItemDetailContainer";
import Cart from "./components/Market/Cart";
import Checkout from "./components/Market/Checkout";
import NoVocals from "./components/TestComponents/NoVocals";


function App() {

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
          <Route path="/vocales" element={<NoVocals/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}// ':' los dos puntos le indica que es un valor que puede llegar a variar recuperandolo con el hook useParams

export default App;
