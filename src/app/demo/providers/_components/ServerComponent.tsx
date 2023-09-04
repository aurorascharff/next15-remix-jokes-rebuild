import React from 'react';

export default function ServerComponent() {
  console.log('SERVER: this should only be printed on the server');
  return <div>I can still have server content inside providers</div>;
}
