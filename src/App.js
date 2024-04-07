import './App.css';
import { GroceryList } from './GroceryList';
import image from './apple.png';
import imageTwo from './vegetables.png';


function App() {
  return (
    <div className="App">
      <img src={ image } width="200px" alt="apple"/>
      <h1>Grocery List</h1>
      < GroceryList />
      <img src={ imageTwo } width="200px" alt="vegetables"/>
      
      
    </div>
  );
}

export default App;
