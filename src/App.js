import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';
import Results from './pages/Results'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Cart />
        <NavMenu/>

        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
