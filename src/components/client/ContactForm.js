"use client";

import { useCallback, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Button from "../Button";

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
    <>
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

            <div className="flex flex-col md:flex-row">
              <div className="flex-grow mr-4">
                <label htmlFor="name" className="block text-2xl mb-2 hidden">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={onNameChange}
                  required
                  className="block w-full mb-4 p-2 bg-zinc-100 rounded"
                />
              </div>
              <div className="flex-grow mr-4">
                <label htmlFor="email" className="block text-2xl mb-2 hidden">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full mb-4 p-2 bg-zinc-100 rounded"
                />
              </div>
            </div>
            <label htmlFor="message" className="block text-2xl mb-2 hidden">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              required
              className="block w-full mb-4 p-2 bg-zinc-100 rounded h-72"
            ></textarea>
            <div className="flex flex-row items-center justify-end">
              <ReCAPTCHA
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              />
              <div className="ml-4">
                <Button type="submit">
                  Send
                </Button>
              </div>
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
    </>
  );
}
