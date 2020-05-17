import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Page from "./Page";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <Page styles='flex-h-center'>
      <Heading level={2} text='Contact' styles='' />
      <ContactForm />
      <Footer />
    </Page>
  );
};

export default ContactPage;
