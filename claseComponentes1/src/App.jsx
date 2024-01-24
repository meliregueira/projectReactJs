import './App.css'
import NavBar from './components/NavBar/NavBar'
import Contenedor from './components/contenedor/Contenedor'
import Carrito from './components/Carrito/Carrito'
import ListaDeItems from './components/ListaDeItems/ListaDeItems'

function App() {

  return (
    <>
        <NavBar/>
        <Contenedor/>
        <Carrito/>
        <ListaDeItems greeting={"Bienvenidos a nuestro e-commerce"}/>
    </>
  )
}

export default App;
