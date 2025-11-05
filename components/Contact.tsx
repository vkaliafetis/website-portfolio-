"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import { sendEmail } from '@/app/actions/sendEmail';


/**
 * Contact section with a simple form. On submit, if server actions are
 * configured with a Resend API key, the message is sent directly via
 * Resend. Otherwise, a fallback mailto link is triggered. A status
 * message informs the user of the result.
 */
export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const { codeMode } = useTheme();

  return (
    <section id="contact" data-code-id="contact-section">
      <h2>Contact</h2>
      <form
        action={async (formData) => {
          const result = await sendEmail(formData);
          if (result?.success) {
            setStatus('Thanks! Your message has been sent.');
          } else if (result?.fallback && result?.mailto) {
            window.location.href = result.mailto;
          } else {
            setStatus('Sorry, something went wrong.');
          }
        }}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="you@example.com" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required placeholder="How can I help?" />

        <input type="submit" value="Send message" />
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}