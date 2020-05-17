import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Page from "./Page";

const ResumePage = () => {
  return (
    <Page className='ResumePage'>
      <Heading level={2} text='Resume' />
      <div className='Resume-container'>
        <iframe
          title='resume'
          src='https://noxid-portfolio.s3-us-west-2.amazonaws.com/Resume.pdf'
          width='90%'
          height='800px'
          style={
            {
              // marginBottom: "12rem",
            }
          }
        ></iframe>
      </div>

      <Footer />
    </Page>
  );
};

export default ResumePage;
