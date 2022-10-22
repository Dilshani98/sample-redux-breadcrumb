import "./App.css";
import Tenants from './pages/tenants';
import Projects from './pages/projects';
import Stepdomains from './pages/stepDomains';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/tenants" element={<Tenants/>}></Route>
          <Route path="/projects/:tenantid" element={<Projects/>}></Route>
          <Route path="/stepdomain/:tenantid/:projectid" element={<Stepdomains/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
