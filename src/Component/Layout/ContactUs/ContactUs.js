import React, { useState } from "react";
// import Button from "@mui/material/Button";
import "./ContactUs.css";
import Loader from "./Loader";

const ContactUs = () => {
  const [allData, setAllData] = useState({
    username: "",
    email: "",
    Phonenumber: "",
    message: "",
  });

  const [sent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inputHandler = (e) => {
    if (e.target.name === "username") {
      setAllData((prevData) => {
        return {
          ...prevData,
          username: e.target.value,
        };
      });
    }

    if (e.target.name === "Email") {
      setAllData((prevData) => {
        return {
          ...prevData,
          email: e.target.value,
        };
      });
    }

    if (e.target.name === "Phonenumber") {
      setAllData((prevData) => {
        return {
          ...prevData,
          Phonenumber: e.target.value,
        };
      });
    }

    if (e.target.name === "message") {
      setAllData((prevData) => {
        return {
          ...prevData,
          message: e.target.value,
        };
      });
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSent(false);
    const allInfo = {
      username: allData.username,
      email: allData.email,
      message: allData.message,
      Phonenumber: allData.Phonenumber,
    };
    setIsLoading(true);
    const response = await fetch(
      "https://movie-app-3d728-default-rtdb.firebaseio.com/feedback.json",
      {
        method: "POST",
        body: JSON.stringify(allInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setIsLoading(false);
    if (response.ok) {
      setIsSent(true);
    }

    setAllData({
      email: "",
      username: "",
      message: "",
      Phonenumber: "",
    });
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={formSubmitHandler}>
          <h2>
            Contact <span>Here</span>
          </h2>

          <h2 className="quote-heading">You Are The Speical For Us.</h2>
          <p className="quote">
            "Your feedback is the fuel that keeps our online store running
            smoothly. We'd love to hear from you! Share your thoughts,
            questions, or concerns, and together we'll create a seamless
            shopping experience."
          </p>

          <input
            type="text"
            name="username"
            value={allData.username}
            onChange={inputHandler}
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="Email"
            value={allData.email}
            onChange={inputHandler}
            placeholder="Enter your Email"
          />
          <input
            type="number"
            name="Phonenumber"
            value={allData.Phonenumber}
            onChange={inputHandler}
            placeholder="Enter your Phone number"
          />
          <textarea
            name="message"
            value={allData.message}
            onChange={inputHandler}
            placeholder="Enter your message"
          />
          <button type="submit">Submit</button>
          <div>
            {sent && (
              <p className="alert fw-bold alert-danger message" role="alert">
                Thank you ! your details has been recevied. One of our executive
                will cantact you soon.
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
