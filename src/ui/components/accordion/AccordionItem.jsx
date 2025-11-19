'use client';

import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import { Collapse } from 'react-collapse';

export default function AccordionItem(props) {
  return (
    <div className="border-b-1 border-secondary/10 pb-6">
      <div
        className="flex flex-row gap-3 items-center cursor-pointer"
        onClick={props.toggle}>
        <HiOutlinePlus
          className={`text-2xl ${props.isOpen ? 'hidden' : 'block'}`}
        />
        <HiOutlineMinus
          className={`text-2xl ${props.isOpen ? 'block' : 'hidden'}`}
        />
        <h2 className="text-2xl font-bold font-title">{props.question}</h2>
      </div>
      <Collapse isOpened={props.isOpen}>
        <p
          dangerouslySetInnerHTML={{ __html: props.answer }}
          className="text-xl font-text leading-text pt-8 w-[90%] text-ctext/90"
        />
      </Collapse>
    </div>
  );
}
