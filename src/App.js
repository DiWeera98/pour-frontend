import "./App.css";
import Layout from "./Containers/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Containers/Login";
import Aboutus from "./Containers/Aboutus";
import Contactus from "./Containers/Contactus";
import Dashboard from "./Containers/dashboard";
import Read from "./Components/Read/Read";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout main={<Login />} />
        </Route>
        <Route exact path="/about-us">
          <Layout main={<Aboutus />} />
        </Route>
        <Route exact path="/contact-us">
          <Layout main={<Contactus />} />
        </Route>
        <Route exact path="/dashboard">
          <Layout main={<Dashboard />} />
        </Route>
        <Route exact path="/read">
          <Layout main={<Read />} />
        </Route>
        <Route exact path="/entry">
          <Layout main={<></>} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
