import React from 'react';
import './App.css';
import Accordion from './components/accordion';

const App = () => {
  const accordionItems = [
    { title: 'Who has access to the Email Marketing Pilot?', content: 'The Email Marketing Pilot is only available to Level 10, Tiers 2-5 FAs. Depending on branch team feedback.' },
    { title: 'Who has access to the Email Marketing Pilot?', content: 'The Email Marketing Pilot is only available to Level 10, Tiers 2-5 FAs. Depending on branch team feedback.' },
    { title: 'Who has access to the Email Marketing Pilot?', content: 'The Email Marketing Pilot is only available to Level 10, Tiers 2-5 FAs. Depending on branch team feedback.' },
  ];

  return (
    <div className="app">
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;
