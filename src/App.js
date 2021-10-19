import "./App.css";
import Layout from "./Containers/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Containers/Login";
import Aboutus from "./Containers/Aboutus";
import Contactus from "./Containers/Contactus";
import Dashboard from "./Containers/dashboard";
import Entry from "./Containers/Entry";
import ReadJournal from "./Containers/ReadJournal";
import CreateCard from "./Components/Dashboard/CreateCard";
import DeleteCard from "./Components/Dashboard/DeleteCard";
import EditCard from "./Components/Dashboard/EditCard";

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
          <Layout main={<ReadJournal />} />
        </Route>
        <Route exact path="/entry">
          <Layout main={<Entry />} />
        </Route>
        <Route exact path="/test">
          <Layout main={<EditCard />} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
