import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddCompany from "./components/AddCompany";
import EditCompany from "./components/EditCompany";
import ListCompany from "./components/ListCompany";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="container">
    <Route path="/" exact component={ListCompany} />
    <Route path="/edit/:id" exact component={EditCompany} />
    <Route path="/add" exact component={AddCompany} />
    </div>
    </Router>
  );
}

export default App;
