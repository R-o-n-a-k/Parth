"use client";
import { IoSend } from "react-icons/io5";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMeForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const serviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const formPublicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    e.preventDefault();
    const confirmSend = window.confirm("Are you sure you want to send?");
    if (confirmSend) {
      emailjs
        .sendForm(serviceKey, templateId, form.current, {
          publicKey: formPublicKey,
        })
        .then(
          () => {
            toast.success("The form was submitted successfully");
          },
          (error) => {
            console.error("Error:", error.text);
            toast.error("❌ Failed to send. Please try again.");
          }
        );
      e.target.reset();
    }
  };

  return (
    <form className="w-full my-8" ref={form} onSubmit={sendEmail}>
      <div data-aos="fade-up" data-aos-offset="5" className="relative mb-6">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
          className="form-input"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="5"
        data-aos-delay="100"
        className="relative mb-6"
      >
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
          className="form-input"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="5"
        data-aos-delay="200"
        className="relative mb-6"
      >
        <label className="form-label">Message</label>
        <textarea
          name="message"
          cols="20"
          rows="7"
          placeholder="Type your message..."
          required
          className="form-input resize-none"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-offset="5"
        data-aos-delay="200"
        className="text-center"
      >
        <button type="submit" className="btn-normal">
          Send <IoSend className="animate-send" />
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </form>
  );
};

export default ContactMeForm;
