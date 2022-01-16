import Home from './pages/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/products/:handle">
          <ProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  )
}

export default App;
