import "./App.css";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <ToastContainer
        pauseOnHover={false}
        autoClose={300}
        position="bottom-right"
        limit={2}
      />
      <Footer />
    </div>
  );
}

export default App;
