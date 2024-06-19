import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import * as Sentry from '@sentry/react';

const App = () => {
  //eslint-disable-next-line
  return <button onClick={() => methodDoesNotExist()}>Break the world</button>;

  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
