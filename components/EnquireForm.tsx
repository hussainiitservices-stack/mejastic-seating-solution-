"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { interests, whatsappNumber } from "@/lib/site";

export function EnquireForm() {
  const params = useSearchParams();
  const requested = params.get("interest");
  const initial = useMemo(() => {
    const match = interests.find((item) => item.toLowerCase() === requested?.toLowerCase());
    return match ?? interests[0];
  }, [requested]);

  const [interest, setInterest] = useState(initial);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterest(initial);
  }, [initial]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone || !message) {
      setError(true);
      setSuccess(false);
      return;
    }

    const text = [
      "Hello Majestic Seating Solutions,",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setError(false);
    setSuccess(true);
  }

  return (
    <form id="enquire-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label>
        What are you interested in?
        <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          placeholder="Quantity, finish, dates, or any question about options, pricing and availability."
        />
      </label>
      {error ? <p className="form-error">Add your name, phone and a short message before sending.</p> : null}
      {success ? (
        <p className="form-success">
          WhatsApp should open with your message to 98922 89987. If it does not, call the workshop directly.
        </p>
      ) : null}
      <button className="btn" type="submit">
        Send on WhatsApp
      </button>
      <p className="form-note">
        This does not store the message on the website. It opens WhatsApp so you can send it yourself.
      </p>
    </form>
  );
}
