import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import background from "./images/backgroundImage.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Info />
      <h2>this is a portfolio</h2>
    </div>
  );
}

export default App;
