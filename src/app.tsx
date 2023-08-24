import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { css, Global } from '@emotion/react';
import { Home } from './home';

const globalStyles = css`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export function App() {
  return (
    <Suspense fallback={null}>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
