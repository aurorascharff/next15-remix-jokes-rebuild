import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function ServerComponent({ children }: Props) {
  console.log('SERVER: this should only be printed on the server');

  return <div className="border border-yellow p-8 text-yellow">Server component{children}</div>;
}
