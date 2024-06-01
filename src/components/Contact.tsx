"use client";
import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

import ContactImg from "@/assets/svg/contact-img.svg";
import { useForm } from "react-hook-form";
import Image from "next/image";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_875nnac",
    //     "template_xy49yao",
    //     form.current,
    //     "cJih3fhhIVWOLGmJo",
    //     setButtonText("Sending")
    //   )

    //   .then(
    //     () => {
    //       setFirstName("");
    //       setLastName("");
    //       setEmail("");
    //       setPhone("");
    //       setMessage("");
    //       setStatus({ success: true, Message: "Message Sent Successfully" });
    //       setButtonText("Send");
    //     },
    //     (error) => {
    //       setStatus({ success: false, Message: "Something Went Wrong" });
    //     }
    //   );
  };

  return (
    <section className="contact   " id="contact">
      <div className="container  md:px-14 lg:px-[105px] px-5 4k:max-w-8xl mx-auto">
        <div className="items-start grid md:grid-cols-2 grid-cols-1 gap-3 ">
          <div>
            <Image className="w-full" src={ContactImg} alt="" />
          </div>
          <div>
            <h2 data-data-aos="slide-up">Get In Touch</h2>
            <form onSubmit={sendEmail}>
              <div className="grid  md:grid-cols-2 grid-cols-1">
                <div className="px-1" data-data-aos="slide-up">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="px-1" data-data-aos="slide-up">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid  md:grid-cols-2 grid-cols-1">
                <div className="px-1" data-data-aos="slide-up">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="px-1" data-data-aos="slide-up">
                  <input
                    required
                    type="tel"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-1" data-data-aos="slide-up">
                <textarea
                  required
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none h-[200px]"
                />
                <button type="submit" data-data-aos="slide-up">
                  <span>{buttonText}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
