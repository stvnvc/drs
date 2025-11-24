import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">
        Contact Us
      </h1>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center">
        Have any questions or feedback? We'd love to hear from you! Please fill
        out the form below and our team will get back to you as soon as
        possible.
      </p>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
