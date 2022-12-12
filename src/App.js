import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import style from "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="container">
        <div className="content">
          <Content />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
