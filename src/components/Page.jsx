import React from "react";

const Page = ({ children, styles }) => {
  return (
    <section className={`Page ${styles}`}>
      {" "}
      <div className='Page__left-shadow'></div>
      <div className='Page__right-shadow'></div>
      {children}
    </section>
  );
};

export default Page;
