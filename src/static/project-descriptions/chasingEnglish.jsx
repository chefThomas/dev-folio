import React from "react";
import Heading from "../../components/Heading";
const chasingEnglish = () => (
  <div className='ProjectDescription'>
    <p>
      ChasingEnglish.com is an ecommerce and content management system I built
      for my partner, a middle school English teacher who, after spending most
      of her adult life teaching in a classroom, sought a new beginning as an
      online educator and entrepreneur.
    </p>

    <Heading level={4}>Content Management System</Heading>
    <p>
      First and foremost, my client required the ability to easily input and
      update course schedules, descriptions, and prices to quickly adapt in
      response to customer feedback. To meet this need, I developed a CMS with
      React, using Ant Design components for data input and display, that
      consumed an API built with Node-Express and a mongoose ORM integrated with
      a mongoDB NoSQL database.
    </p>

    <Heading level={4}>Ecommerce</Heading>
    <p>
      I suggested an upfront online payment system so my client could avoid
      stressful delinquent payment conversations which had been a pain point in
      a previous freelance role. I chose Stripe because its service works by
      redirecting users to their servers This allowed me to avoid getting in
      over my head on security concerns. I was confident in Stripe’s security
      because they have a massive customer base containing some very well-known
      ecommerce sites.
    </p>

    <Heading level={4}>UX and Styling</Heading>
    <p>
      I began by asking the question: Who will be viewing the site and how will
      they use it?
      <p>
        <i>
          <b>The client</b>
        </i>
        <br></br>
        My client’s usage consisted of entering and viewing tabular data. To
        ease data entry of different course types, I relied on React’s ability
        to dynamically render form components. To provide a concrete example,
        her courses were fundamentally divided into those for the individual and
        those for groups. When creating a course for the individual, I chose to
        make the field for the number of openings available absent.
      </p>
      <p>
        Tables are great for displaying a lot of information at a glance, but
        can lead to a cluttered appearance when too many items are shown at
        once. To avoid this, I limited the number of rows per view using
        pagination, and made vital, (but expansive), data available by clicking
        icons.
      </p>
      <p>
        Though the administrator’s views are fine on small screens, a
        mobile-first approach was not taken, because all data entry was
        better-suited for laptop to desktop sized screens.{" "}
      </p>
      <p>
        <i>
          <b>The client’s customers</b>
        </i>
        <br></br>
        Trying to simultaneously convey professionalism and warmth was the
        biggest styling challenge of this project. As an ecommerce site, it was
        important to project security and professionalism (who wants to take out
        their credit card for a site using Comic Sans font?), but teaching
        involves making human connections with parents and their children, so
        the edges needed to be softened up a bit.
      </p>
      <p>
        To tick the secure/professional box, I used a subdued and classic color
        palette of white with shades of gray. Muted colors were used sparingly,
        with exceptions for elements directing user actions or calls to
        attention.
      </p>
      <p></p>
      To bring in a sense of humanity (and mirror the services rendered by my
      client), I turned to a free suite of illustrations depicting young-looking
      people using digital devices.
    </p>
  </div>
);

export default chasingEnglish;
