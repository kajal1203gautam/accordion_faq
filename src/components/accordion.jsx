import React from 'react';
import AccordionItem from './accordionItem';

const Accordion = ({ items }) => {
  return (
    <div className="accordion text-center pt-5">
        <h5>General Questions</h5>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
