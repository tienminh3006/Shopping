import Box from "@material-ui/core/Box/Box";
import { Redirect, Route, Switch } from "react-router-dom";
import Slider from "../../components/SliderBar";
import CartFeature from "../Cart/index";
import Footer from "../Footer";
import Header from "../Header";
import Home from "../Home";
import NotFound from "../NotFound";
import ProductFeature from "../Products/index";

function App() {
  return (
    <div className="App">
      <Box>
        <Header />
        <Slider />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/" component={Home} exact />
          <Route path="/products" component={ProductFeature}></Route>
          <Route path="/cart" component={CartFeature}></Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
