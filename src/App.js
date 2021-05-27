import './App.css';
import MovieList from'./components/MovieList'
import {Switch,Route} from 'react-router-dom'
import Description from './components/Description';

function App() {
  return (
    <div className="App">
<Switch>
      
<Route exact path='/' component={MovieList}/>
<Route path='/desc/:name' component={Description}/>
</Switch>      
    </div>
  );
}

export default App;
