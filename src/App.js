import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Alert from "./Components/Layout/Alert";
import User from "./Pages/User";
import Home from "./Pages/Home";
import { GithubProvider } from "./Context/github/GithubContext";
import { AlertProvider } from "./Context/alert/AlertContext";
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar title="Github Finder" />

            <main className="container mx-auto px-3 pb-12">
              <Alert></Alert>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/user/:login" element={<User />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
