import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Page from "./Page";

const ResumePage = () => {
  return (
    <Page className='ResumePage'>
      <Heading level={2} text='Resume' />
      <div className='Resume-container'>
      <iframe title="tom dixon resume"scrolling='no'frameBorder="0"src="https://resume.creddle.io/embed/i66hhdu2fjh"
  width="850" height="1100" seamless></iframe> 
      </div>
      <Footer />
    </Page>
  );
};

export default ResumePage;
