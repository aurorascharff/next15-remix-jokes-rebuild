import React, { use } from 'react';

export default function JokesHeader() {
  use(
    new Promise(resolve => {
      return setTimeout(resolve, 1000);
    }),
  );
  return <h5>Jokes</h5>;
}
