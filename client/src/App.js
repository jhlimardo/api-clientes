import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import AddClient from "./components/AddClient"
import EditClient from "./components/EditClient"
import ClientDetail from "./components/ClientDetail"

function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path="/" element={<Home />}/>

            <Route exact path="/:id" element={<ClientDetail />}/>
              
            <Route exact path="/add" element={<AddClient />}/>
   
            <Route exact path="/edit/:id" element={<EditClient />}/>
            
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
