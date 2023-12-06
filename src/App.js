import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background =
        "linear-gradient(45deg, rgb(241, 241, 241) 50%, rgb(158, 232, 255) 50%)";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.background =
        "linear-gradient(45deg, rgb(92, 92, 92) 50%, rgb(27, 27, 27) 50%)";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />

      <TextForm
        heading="TextUtis - Word Counter, Charecter Counter, Remove Extra Space"
        summaryHead="Summery Of Your Text"
        mode={mode}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
