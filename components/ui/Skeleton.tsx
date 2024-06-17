import React from 'react';
import { cn } from '@/utils/style';

type Props = {
  className?: string;
};

export default function Skeleton({ className }: Props) {
  return (
    <div className={cn('flex-1', className)}>
      <div className="skeleton-animation mb-2 h-3 w-10 rounded" />
      <div className="skeleton-animation mb-2 h-4 rounded" />
      <div className="skeleton-animation mb-2 h-4 rounded" />
      <div className="skeleton-animation mb-2 h-2 w-12 rounded" />
      <div className="skeleton-animation mb-2 h-2 w-20 rounded" />
    </div>
  );
}
