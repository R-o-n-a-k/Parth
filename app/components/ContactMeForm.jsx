"use client";
import React from "react";
import { IoSend } from "react-icons/io5";

const ContactMeForm = () => {
  return (
    <form className="w-full my-8">
      <div className="relative mb-6">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          placeholder="FirstName LastName"
          required
          className="form-input"
        />
      </div>

      <div className="relative mb-6">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
          className="form-input"
        />
      </div>

      <div className="relative mb-6">
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

      <div className="text-center">
        <button type="submit" className="btn-normal">
          Send <IoSend className="animate-send" />
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;
