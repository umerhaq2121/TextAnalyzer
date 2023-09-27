import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState, useEffect } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  // Use a useEffect to apply the default mode
  useEffect(() => {
    document.body.style.backgroundColor = "#142237"; // Apply the dark mode background color
    showAlert("Dark mode has been Enabled.", "success");
  }, []);

  const [Mode, setMode] = useState("dark"); // Set the default mode to "dark"
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled.", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#142237";
      showAlert("Dark mode has been Enabled.", "success");
    }
  };

  return (
    <>
      <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter text to analyze"
        mode={Mode}
      />

      {/*
      <BrowserRouter>
        <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text to analyze"
                  mode={Mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

            */}
    </>
  );
}

export default App;
