import './App.css';
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/main/ItemListContainer';

function App () {
  return (
    <div className="App">
      <NavBar saludo={'Bienvenido!!!'}/>
      <ItemListContainer />
      <Footer />
    </div>
  );
};

export default App;