import Navbar from './navbar'
import Homepage from "./homepage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
