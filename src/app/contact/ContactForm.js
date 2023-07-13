"use client";

import { useCallback, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subject, setSubject] = useState("Blog Contact Form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const data = new FormData(e.target);
    await fetch(e.target.action, {
      method: e.target.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    setIsSubmitted(true);
  }, []);

  const onNameChange = useCallback(({ target }) => {
    setSubject(`Blog Contact Form from ${target.value}`);
    setName(target.value);
  }, []);

  return (
    <section className="mt-6 md:p-6 bg-white md:border border-slate-300">
      {!isSubmitted && (
        <>
          <p className="mb-4">
            Fill out this form to send me an email, and I will get back to you
            ASAP.
          </p>
          <form
            action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_SPREE_ID}`}
            method="POST"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="subject" value={subject} />
            <label htmlFor="name" className="block text-2xl font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onNameChange}
              required
              className="block w-full mb-4 p-2 bg-slate-50 border border-slate-300"
            />
            <label htmlFor="email" className="block text-2xl font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full mb-4 p-2 bg-slate-50 border border-slate-300"
            />
            <label htmlFor="message" className="block text-2xl font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="block w-full mb-4 p-2 bg-slate-50 border border-slate-300 h-72"
            ></textarea>
            <div className="flex justify-end items-center">
              <ReCAPTCHA
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              />
              <button className="ml-4 px-10 py-2 bg-slate-500 text-white rounded-md">
                Send
              </button>
            </div>
          </form>
        </>
      )}
      {isSubmitted && (
        <>
          <h1 className="text-3xl font-bold mb-4">Thanks!</h1>
          <p>I will get back to you ASAP.</p>
        </>
      )}
    </section>
  );
}
