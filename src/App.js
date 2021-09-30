import Box from "@material-ui/core/Box/Box";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CartFeature from "./components/features/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/features/NotFound";
import ProductFeature from "./components/features/Products";
import SliderFeature from "./components/Slider";

function App() {
  return (
    <div className="App">
      {/* <Box */}
      <Box>
        <Header />
        <SliderFeature />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/" component={ProductFeature} exact />
          <Route path="/products" component={ProductFeature}></Route>
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
