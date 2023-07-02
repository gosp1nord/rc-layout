import logo from './logo.svg';
import './App.css';
import { products } from './components/data';
import { Store } from './components/ProductsFC';

function App() {
  return (
    <div className="container">
      <div className='block-portfolio'>
      <Store items={products}/>
      </div>
    </div>
  );
}

export default App;
