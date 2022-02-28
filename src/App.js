import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import Footer from './components/footer/Footer';
import productos from './components/main/stock.json';

function App () {
  return (
    <div className="App">
      <NavBar saludo={'Bienvenido!!!'}/>
      <ItemListContainer stock={productos}/>
      <Footer />
    </div>
  );
};

export default App;