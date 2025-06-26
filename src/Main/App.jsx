import Main from '../Frontend/templates/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/alert';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
import './App.css';
import Header from '../Frontend/templates/Menu'
import Nav from '../Frontend/templates/Nav'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Nav />
    </div>
  );
}
export default App;
