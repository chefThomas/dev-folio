import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Page from "./Page";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <Page className='Page'>
      <Heading level={2} text='Contact' />
      <ContactForm />
      <Footer />
    </Page>
  );
};

export default ContactPage;
