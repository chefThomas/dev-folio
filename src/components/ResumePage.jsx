import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Page from "./Page";

const ResumePage = () => {
  return (
    <Page className='HomePage'>
      <Heading level={2} text='Resume' />
      <Footer />
    </Page>
  );
};

export default ResumePage;
