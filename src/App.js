import './App.css';
import { GroceryList } from './GroceryList';
import image from './apple.png';
import imageTwo from './vegetables.png';


function App() {
  return (
    <div className="App">
      <img src={ image } width="180px" alt="apple"/>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      < GroceryList />
      <div className='containerTwo'>
      <img src={ imageTwo } width="250px" alt="vegetables"/>
      </div>
      
      
    </div>
  );
}

export default App;
