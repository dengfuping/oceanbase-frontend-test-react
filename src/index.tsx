import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Problem1 from './Problem1';
import Problem2 from './Problem2';
import Problem3 from './Problem3';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Problem1 />
    <Problem2 />
    <Problem3 />
  </StrictMode>
);
