'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button
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
