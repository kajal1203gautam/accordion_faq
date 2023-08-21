import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="accordion-item text-center pt-5">
      <button className="accordion-header" >
        {title}
        <i className="material-icons add_icon" onClick={toggleAccordion}>{!isOpen?'arrow_downward':'arrow_upward'}</i></button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
