import React from "react";
const pluma = () => (
  <div className='ProjectDescription'>
    <p>
      Pluma is a web app that maps data from eBird -the Cornell Lab of
      Ornithology's massive database of bird sightings- made available through
      their free API.
    </p>

    <p>
      Pluma uses 3 Google APIs to search for locations and display the data from
      eBird:
      <ul>
        <li>
          <b>Maps</b> to display geospatial data.
        </li>
        <li>
          <b>Geocoding</b> to convert users' verbal locations to geocoordinates.
        </li>
        <li>
          <b>Directions</b> to draw routes from user locations to bird
          sightings.
        </li>
      </ul>
      As a former field biologist, perennial bird enthusiast, and current web
      developer, building Pluma was really, really fun because it combined
      multiple disciplines of interest to me.
    </p>
  </div>
);

export default pluma;
