import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import InventoryState from './context/inventory/InventoryState';

const App = () => {
  return (
    <InventoryState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </InventoryState>
  );
};

export default App;
