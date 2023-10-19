'use client';

import { HydrationBoundary } from '@tanstack/react-query';
import type { HydrationBoundaryProps } from '@tanstack/react-query';

function ReactQueryHydrate(props: HydrationBoundaryProps) {
  return <HydrationBoundary {...props} />;
}

export default ReactQueryHydrate;
