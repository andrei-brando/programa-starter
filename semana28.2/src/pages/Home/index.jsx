import React from 'react';
import News from '../../components/News';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
        lacinia eget consectetur sed, convallis at tellus. Mauris blandit
        aliquet elit, eget tincidunt nibh pulvinar a.
      </p>
      <News />
    </>
  );
}
