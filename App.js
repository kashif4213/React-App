import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Filter from './Filter';
import Courses from './Courses';
import Items from './Items';

function App() {
  return  <div className="App">
      <Navbar />
    <Searchbar/>
    <Filter />
    <Courses/>
    <Items/>
    </div>

  
}



export default App;
