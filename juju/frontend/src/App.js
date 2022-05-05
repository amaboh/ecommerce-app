import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Waikawa</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path={`/product/:id`} element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rigths reserved</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
