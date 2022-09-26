import { keyframes } from '@stitches/react';

export const pulse = keyframes({
  '50%': { opacity: 1 },
});

export const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const shift = keyframes({
  from: { transform: 'translateY(12px)' },
  to: { transform: 'translateY(0%)' },
});