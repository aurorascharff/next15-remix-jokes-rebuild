import React, { useState } from 'react';

export default function ServerComponent() {
  const [count] = useState(0);

  console.log('CHILD Server rendering 3: this should only be printed on the server');

  return <div className="m-5 bg-yellow p-5 text-purple">Server component {count}</div>;
}
