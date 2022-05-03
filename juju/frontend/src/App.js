import HomeScreen from "./screens/HomeScreen"
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import ProductScreen from "./screens/ProductScreen"


function App() {
  return (
    <Router>
      <div>
      <header>
        <Link to="/">Juju</Link>
      </header>
      <main>
      <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path={`/product/:id`} element={<ProductScreen/> }/>
      </Routes>
      </main>
    </div>  
    </Router>
   
  );
}

export default App;
