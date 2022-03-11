import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import './App.css';

function App () {
  return (
    <div className="App">
      <NavBar saludo={'Bienvenido!!!'}/>
      <ItemListContainer />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
};

export default App;