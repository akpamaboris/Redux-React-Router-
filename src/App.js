import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import the components
import Counter from "./Counter";
import Test from "./Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Counter />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
