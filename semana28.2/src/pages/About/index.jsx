import React from "react";
import News from "../../components/News";

export default function About() {
  return (
    <React.Fragment>
      <h1>About Page</h1>
      <p>
        Cras ultricies ligula sed magna dictum porta.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
      </p>
      <News />
    </React.Fragment>
  );
}
