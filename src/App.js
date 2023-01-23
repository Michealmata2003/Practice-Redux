import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Containers/Header'
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';



function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route> 404 not found!</Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
