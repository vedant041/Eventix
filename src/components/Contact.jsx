import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Mahanubhav nagar,Gorewada RingRoad</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-8888-4538-09</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>enochcarlo8@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0814458601303!2d79.05628677447096!3d21.18892328050071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a204bd18cd%3A0x5706cda6d393c9a5!2sMahanubhav%20Nagar%2C%20Gorewada%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1737800025073!5m2!1sen!2sin" 
              height="100%"
              width="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
