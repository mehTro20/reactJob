import bootstrap from "bootstrap";
import Display from "./Display";
import React, { useState, useEffect } from "react";

const Joblist = ({ nameInput, surnameInput }) => {
  const [check, setCheck] = useState({
    isChecked: false,
  });
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    let store =   JSON.parse(localStorage.getItem("people")) || null;
    if(store){
      setUserInfo(store)
    }
      
  }, [])
  
  let disp = JSON.parse(localStorage.getItem("jobs"));

  const handleCheck = (e, id) => {
    console.log("id", id);
    let isChecked = e.target.checked;
    setCheck({
      isChecked,
    });

    if (isChecked) {
      let display = disp[id];
      let store = JSON.parse(localStorage.getItem("userChecked")) || [];
      store.push(display);
      localStorage.setItem("userChecked", JSON.stringify(store));
    } else if (!isChecked) {
      let store = JSON.parse(localStorage.getItem("userChecked")) || [];
      let display = disp[id];
      let me = store.filter((item) => item.id !== display.id);
      localStorage.setItem("userChecked", JSON.stringify(me));
    }
  };
  // let people = JSON.parse(localStorage.getItem("people")) || [];
  // console.log(people)
console.log('users', userInfo)
  return (
    <div>
      <h1>Here are some jobs</h1>
      <table className="thead-dark" id="customers">
        <thead>
          <tr>
            <th scope="col">Select</th>
            <th scope="col">To do:</th>
            <th scope="col"> Position: </th>
            <th scope="col"> Requirement: </th>
            <th scope="col"> Contact: </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr> */}
          {disp.map((jobs, i) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" onClick={(e) => handleCheck(e, i)} />
                </td>
                <td>{jobs.companyName}</td>
                <td>{jobs.position}</td>
                <td>{jobs.requirement}</td>
                <td>{jobs.contact}</td>
              </tr>
            );
          })}
          {/* </tr> */}
        </tbody>
      </table>
      <div>
        <Display nameInput={nameInput} surnameInput={surnameInput} />
      </div>
    </div>
  );
};

export default Joblist;
