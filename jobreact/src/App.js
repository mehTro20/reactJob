import "./App.css";
import React, { useState } from "react";
import AdvertisingApplicationForm from "./components/AdvertisingApplicationForm";
import ApplicationForm from "./components/ApplicationForm";
import JobList from "./components/JobList";
import AppliedList from "./components/AppliedList";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [reason, setReason] = useState("");
  const [information, setInformation] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="applicationform" />} />
          <Route
            path="/Applicationform/*"
            element={
              <ApplicationForm
                nameInput={nameInput}
                setNameInput={setNameInput}
                surnameInput={surnameInput}
                setSurnameInput={setSurnameInput}
                reason={reason}
                setReason={setReason}
                information={information}
                setInformation={setInformation}
              />
            }
          />
          <Route path="/advertise" element={<AdvertisingApplicationForm />} />
          <Route
            path="/list"
            element={
              <JobList nameInput={nameInput} surnameInput={surnameInput} />
            }
          />
          <Route path="/applied" element={<AppliedList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
