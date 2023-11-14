import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      
      <Switch>
          <Route exact path="/"> <Navigation/> </Route>
          <Route path="/signup"> <SignupFormPage/> </Route>
          <Route path="/login"> <LoginFormPage/> </Route>
      </Switch>
    </>
  );
}

export default App;
