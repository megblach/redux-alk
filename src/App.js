import './App.css';
import { Switch, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Home } from './classes/pages/Home';
import PizzaContainer from './classes/pizza/components/PizzaContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';



function App() {
  return (
  <div className="App">
  <Provider store={store}>
    <Router>
        <p className="header">Zjazd React 10-11.04.2021</p>
        <ul>
          <li><NavLink exact to="/"> Home </NavLink></li>
          <li><NavLink to="/pizza-calculator"> Pizza Calculator </NavLink></li>
        </ul>


      <Switch>

      <Route exact path="/">
        <Home />
        </Route>

        <Route path="/pizza-calculator">
        <PizzaContainer />
        </Route>

        <Route path="*">
        <div>404</div>
        </Route>

      </Switch>
    </Router>
  </Provider>
  </div>
  );
}

export default App;
