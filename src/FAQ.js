import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionButton } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';

function FAQ() {

  const images = [
    ["Whats is your name? ","My name is ..................."],
    ["Where do you live ? ","I live in ...................."],
    ["Where do you work? ","I work in ......................"],
    ["How old are you ?","..................................."],
  ];

  function getImage(index) {
    return [images[index][0], images[index][1]];
  }

  
  return (
    <>
    <div>
      <Accordion defaultActiveKey="0">
        <AccordionItem eventKey='0'>
          <AccordionHeader >
            <p>
              {getImage(0)[0].toString() }
            </p>
          </AccordionHeader>
            <AccordionBody>
              <strong>{getImage(0)[1].toString() }</strong>
            </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey='1'>
          <AccordionHeader>
            <p>
              {getImage(1)[0].toString() }
            </p>
            <AccordionBody>
              <strong>{getImage(1)[1].toString() }</strong>
            </AccordionBody>
          </AccordionHeader>
        </AccordionItem>
        <AccordionItem eventKey='2'>
          <AccordionHeader >
            <p>
              {getImage(2)[0].toString() }
            </p>
            <AccordionBody>
              <strong>{getImage(2)[1].toString() }</strong>
            </AccordionBody>
          </AccordionHeader>
            

        </AccordionItem>
      </Accordion>
    </div>
      
    </>
  );
}

export default FAQ;