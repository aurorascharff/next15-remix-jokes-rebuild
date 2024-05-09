import React from 'react';

export default async function JokesHeader() {
  await new Promise(resolve => {
    return setTimeout(resolve, 2000);
  });
  return <h5>Jokes</h5>;
}
