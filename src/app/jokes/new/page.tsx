import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New joke',
};

export default function NewJokePage() {
  return <div className="flex flex-col gap-5">New joke page</div>;
}
