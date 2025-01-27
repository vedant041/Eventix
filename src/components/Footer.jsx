import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        { email },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setEmail("");  // Clear the email field after success
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || 'Something went wrong');
      });
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Eventix's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendMessage}>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
