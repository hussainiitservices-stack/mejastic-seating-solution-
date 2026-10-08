import type { Metadata } from "next";
import { fullAddress, phoneDisplay, phoneTel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Majestic Seating Solutions, Bhiwandi, Thane.",
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="wrap page-hero">
        <p className="eyebrow">Privacy policy</p>
        <h1>How enquiries are handled.</h1>
        <p className="lede">
          Effective date: 1 January 2025. Majestic Seating Solutions (“we”, “our” or “us”) values your privacy.
        </p>
      </section>

      <article className="wrap policy prose">
        <p>
          This policy explains how information is collected, used and protected when you use this website or contact the workshop. It carries forward the policy published for the business.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>Personal information you provide, such as your name and phone number, when you contact us or send an enquiry.</li>
          <li>Non-personal information, such as browser type, IP address and pages visited, if cookies or analytics tools are added later.</li>
        </ul>
        <p>
          The enquiry form on this site does not store your message on the website. Sending it opens WhatsApp so you can deliver the message yourself to {phoneDisplay}.
        </p>

        <h2>How we use information</h2>
        <ul>
          <li>To provide, operate and improve the website and manufacturing enquiries.</li>
          <li>To respond to questions and customer requests.</li>
          <li>To send updates or offers, where you have asked for them. You can opt out at any time.</li>
          <li>To understand how the website is used, if analytics are enabled.</li>
        </ul>

        <h2>Sharing of information</h2>
        <p>
          We do not sell, rent or trade your personal information. Data may be shared only with trusted parties who help operate the website, where the law requires it, or to protect our rights.
        </p>

        <h2>Cookies</h2>
        <p>
          This website may use cookies to support browsing. You can refuse cookies in your browser settings. Some features may then work differently.
        </p>

        <h2>Data security</h2>
        <p>Reasonable measures are used to protect personal information. No method of sending information over the internet is completely secure.</p>

        <h2>Your rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting the workshop.</p>

        <h2>Updates</h2>
        <p>This policy may be updated from time to time. Changes will be posted on this page with a new effective date.</p>

        <h2>Contact</h2>
        <p>Questions about this policy can be sent to the workshop:</p>
        <ul>
          <li>
            Phone: <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>
          </li>
          <li>Majestic Seating Solutions, {fullAddress}</li>
        </ul>
      </article>
    </main>
  );
}
