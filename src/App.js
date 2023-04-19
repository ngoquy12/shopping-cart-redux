import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProduct />
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Cart />
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
