"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../globals.css";

export default function contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="mainContact">
        <form ref={form} onSubmit={sendEmail} className="mainBoxForm">
          <div className="boxData">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="box"
            />
            <input
              type="email"
              placeholder="Email address"
              name="user_email"
              className="box"
            />
          </div>
          <div className="boxText">
            <textarea
              name="message"
              type="text"
              placeholder="Message"
              className="textArea"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Enviar"
            id="input-submit"
            className="btnSubmit"
          />
        </form>
      </div>
    </div>
  );
}
