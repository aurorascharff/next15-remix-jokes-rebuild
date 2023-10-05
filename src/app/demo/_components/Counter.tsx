'use client';

import React, { useState } from 'react';
import Button from '@/src/components/Button';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button
      type="button"
      onClick={() => {
        return setCount(count => {
          return count + 1;
        });
      }}
    >
      +{count}
    </Button>
  );
}
