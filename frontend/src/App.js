import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import Navigation from "./components/Navigation";
import ProductsIndex from "./components/ProductsIndex";

function App() {
  return (
    <>
      
      <Switch>
          <Route exact path="/">
             <Navigation/> 
             <ProductsIndex/>
          </Route>
          <Route path="/products/:productId"
          <Route path="/signup"> <SignupFormPage/> </Route>
          <Route path="/login"> <LoginFormPage/> </Route>
      </Switch>
    </>
  );
}

export default App;
