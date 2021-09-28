import "./App.css";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductFeature from "./components/Products";
import CartFeature from "./components/features/Cart";
import Box from "@material-ui/core/Box/Box";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      {/* <Box */}
      <Box>
        <Header />
        <Slider />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/" component={ProductFeature} />
          {/* <Route path="/products" component={ProductFeature}></Route> */}
          <Route path="/cart" component={CartFeature}></Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
