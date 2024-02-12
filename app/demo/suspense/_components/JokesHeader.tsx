import React, { use } from 'react';

export default function JokesHeader() {
  use(
    new Promise(resolve => {
      return setTimeout(resolve, 2000);
    }),
  );
  return <h5>Jokes</h5>;
}
