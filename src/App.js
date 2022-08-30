import "./App.css";
import Nav from "./components/nav/Nav";
import Welcome from "./components/frontPage/Welcome";
import About from "./components/about/About";
import Products from "./components/companyStore/Products";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="welcome">
        <Nav />
        <Cart />
        <Welcome />
      </div>

      <About />
      <Products />
    </div>
  );
}

export default App;
