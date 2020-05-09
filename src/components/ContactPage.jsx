import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Page from "./Page";

const ContactPage = () => {
  return (
    <Page className='Page'>
      <Heading level={2} text='Contact' />
      <Footer />
    </Page>
  );
};

export default ContactPage;
