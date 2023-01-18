// import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplicationForm = ({
  nameInput,
  setNameInput,
  surnameInput,
  setSurnameInput,
  reason,
  setReason,
  information,
  setInformation,
}) => {
  const [userInfo, setUserInfo] = useState([]);

  let navigate = useNavigate();

  useEffect(()=> {
    let store = JSON.parse(localStorage.getItem("people")) || [];
    console.log("store", store);
  })

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const surnameInputHandler = (e) => {
    setSurnameInput(e.target.value);
  };

  const reasonHandler = (e) => {
    setReason(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInformation([
      ...information,
      {
        name: nameInput,
        surname: surnameInput,
        reason: reason,
        id: Math.random() * 1000,
      },
    ]);
    
    let store = JSON.parse(localStorage.getItem("people")) || [];
    store.push({ nameInput, surnameInput });
    console.log("store", store);
    localStorage.setItem("people", JSON.stringify(store));

    let selectInfo = store.slice(-1)
console.log('selectedInfo', selectInfo)


    setUserInfo([selectInfo])

    setNameInput("");
    setSurnameInput("");
    // console.log(information);

    console.log("userInfo", userInfo);
    

      navigate(reason === "application" ? "/list" : "/advertise");
    
    
  };

  ;
  // useEffect(() => {
  //   setInformation(JSON.parse(localStorage.getItem("information")));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("information", JSON.stringify(information));
  // }, [information]);

  return (
    <div className="form">
      <label>
        Name:
        <input
          type={"text"}
          onChange={nameInputHandler}
          className="name"
          value={nameInput}
        />
      </label>
      <label>
        Surname:
        <input
          type={"text"}
          onChange={surnameInputHandler}
          className="surname"
          value={surnameInput}
        />
      </label>

      <label for="options">I am here for:</label>
      <select name="options" value={reason} onChange={reasonHandler}>
        <option value="advertise">Job Advert</option>
        <option value="application">Job Application</option>
      </select>
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default ApplicationForm;
