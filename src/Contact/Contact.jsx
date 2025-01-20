import React, { useEffect, useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <>
      <form className="w-50 p-3 mx-auto my-5 ">
        <div className="container  ">
          <div className={`${userName ? "form-floating" : ""} " my-3  "`}>
            <input
              type="text"
              className="form-control border-transparent "
              id="floatingInput"
              placeholder="userName"
              onInput={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label
              htmlFor="floatingInput"
              className={`${userName ? "" : "d-none label"}  `}
              style={{ color: "rgb(26, 188, 156)"}}
            >
              userName:
            </label>
          </div>
          <div className={`${userAge ? "form-floating" : ""} " my-3  "`}>
            <input
              type="text"
              className="form-control border-transparent  position-relative"
              id="floatingInput"
              placeholder="userAge"
              onInput={(e) => {
                setUserAge(e.target.value);
              }}
            />
            <label
              htmlFor="floatingInput"
              className={`${userAge ? "" : "d-none "}   `}
              style={{ color: "rgb(26, 188, 156)"}}
            >
              userAge:
            </label>
          </div>
          <div className={`${userEmail ? "form-floating" : ""} " my-3  "`}>
            <input
              type="text"
              className="form-control border-transparent position-relative "
              id="floatingInput"
              placeholder="userEmail"
              onInput={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <label
              htmlFor="floatingInput"
              className={`${userEmail ? "" : "d-none "}     `}
              style={{ color: "rgb(26, 188, 156)" }}
            >
              userEmail:
            </label>
          </div>
          <div className={`${userPassword ? "form-floating" : ""}  " my-3  " `}>
            <input
              type="text"
              className="form-control border-transparent  position-relative"
              id="floatingInput"
              placeholder="userPassword"
              onInput={(e) => {
                setUserPassword(e.target.value);
              }}
            />
            <label
              htmlFor="floatingInput"
              className={`${userPassword ? "" : "d-none "}     `}
              style={{ color: "rgb(26, 188, 156)" }}
            >
              userPassword:
            </label>
          </div>
        </div>
        <button
          className="btn text-white mt-3 ms-2 mt-4"
          style={{ backgroundColor: "#1abc9c" }}
        >
          send Message
        </button>
      </form>
    </>
  );
}
