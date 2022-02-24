import './App.css';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import Footer from './components/footer/Footer';

function App () {

  return (
    <div className="App">
      <NavBar saludo={'Bienvenido!!!'}/>
      <ItemListContainer/>
      <Footer />
    </div>
  );
};

export default App;