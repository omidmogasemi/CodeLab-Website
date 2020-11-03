import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Router from "./components/RouterPage";

function App() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col">
          <Router>
            <Navbar />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App;