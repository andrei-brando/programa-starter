import React from 'react';

export default function Card({ title }) {
  return (
    <React.Fragment>
      <section>
        <h2>{title}</h2>
        <p>
          Cras ultricies ligula sed magna dictum porta.
          Vivamus magna justo, lacinia eget consectetur sed,
        </p>
      </section>
    </React.Fragment>
  );
}