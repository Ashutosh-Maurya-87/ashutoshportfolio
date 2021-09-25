import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Info name="Ashutosh Maurya" education="BCA" />
    </div>
  );
}

export default App;
