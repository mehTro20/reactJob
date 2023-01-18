import React, { useState } from "react";

const AdvertisingApplicationForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [requirement, setRequirement] = useState("");
  const [contact, setContact] = useState("");
  const [jobs, setJobs] = useState([]);

  const companyNameHandler = (e) => {
    setCompanyName(e.target.value);
  };

  const positionHandler = (e) => {
    setPosition(e.target.value);
  };

  const requirementHandler = (e) => {
    setRequirement(e.target.value);
  };

  const contactHandler = (e) => {
    setContact(e.target.value);
  };

  const submitHandler1 = (e) => {
    e.preventDefault();
    const id = Math.random() * 1000;
    setJobs([
      ...jobs,
      {
        company: companyName,
        position: position,
        requirement: requirement,
        contact: contact,
        id: id,
      },
    ]);

    let store = JSON.parse(localStorage.getItem("jobs")) || [];
    store.push({ companyName, position, requirement, contact, id });
    localStorage.setItem("jobs", JSON.stringify(store));

    setCompanyName("");
    setPosition("");
    setContact("");
    setRequirement("");
  };

  //   useEffect(() => {
  //     localStorage.setItem("jobs", JSON.stringify(jobs));
  //   });

  return (
    <div>
      <h1>Tell us more about the job</h1>
      <div className="form">
        <label>
          Company Name:
          <input onChange={companyNameHandler} value={companyName} />
        </label>
        <label>
          Position: <input onChange={positionHandler} value={position} />
        </label>
        <label>
          Requirement:
          <input onChange={requirementHandler} value={requirement} />
        </label>
        <label>
          Contact: <input onChange={contactHandler} value={contact} />
        </label>
      </div>
      <button onClick={submitHandler1}>Submit</button>
    </div>
  );
};

export default AdvertisingApplicationForm;
