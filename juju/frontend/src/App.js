import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import {useContext} from "react";
import {Store} from "./store"

function App() {
  const {state} = useContext(Store);
  const {cart} = state;

  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Waikawa</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                  <Link to="/cart" className="nav-link">
                    Cart
                      {cart.cartItems.length > 0 && (
                        <Badge pill bg="danger">
                          {cart.cartItems.length}
                        </Badge>
                      )}
                  </Link>
              </Nav>
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
