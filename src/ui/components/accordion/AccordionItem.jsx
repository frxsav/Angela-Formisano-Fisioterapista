'use client';

import { HiOutlinePlus, HiOutlineMinus, HiChevronDown } from 'react-icons/hi';
import { Collapse } from 'react-collapse';
import Link from 'next/link';
import { trattamenti } from '@/lib/data';

export default function AccordionItem(props) {
  return (
    <div
      className={`${
        props.menu
          ? 'flex flex-col justify-center items-center'
          : 'border-b-1 border-secondary/10 pb-6'
      }`}>
      <div
        className={`flex-row gap-3 items-center cursor-pointer ${
          props.menu ? 'hidden' : 'flex'
        }`}
        onClick={props.toggle}>
        <HiOutlinePlus
          className={`text-2xl ${props.isOpen ? 'hidden' : 'block'}`}
        />
        <HiOutlineMinus
          className={`text-2xl ${props.isOpen ? 'block' : 'hidden'}`}
        />
        <h2 className="lg:text-2xl text-xl font-bold font-title lg:pr-0 pr-6">
          {props.question}
        </h2>
      </div>
      <button
        className={`${
          props.menu
            ? 'text-secondary hover:bg-secondary-100 px-3 py-2 font-medium transition-colors border-b-1 border-secondary/10 w-[80%] self-center text-center flex items-center justify-center'
            : 'hidden'
        }`}
        onClick={props.toggle}>
        Trattamenti <HiChevronDown />
      </button>
      <Collapse isOpened={props.isOpen}>
        <p
          dangerouslySetInnerHTML={{ __html: props.answer }}
          className={`${
            props.menu
              ? 'hidden'
              : 'text-xl font-text leading-text pt-8 w-[90%] text-ctext/90'
          }`}
        />
        <div
          className={`${
            props.menu
              ? 'flex flex-col text-center border-t border-b border-primary-900/50 px-3'
              : 'hidden'
          }`}>
          {trattamenti.map((item) => (
            <Link
              key={item}
              className="py-2 border-b border-primary-900/20 last:border-0 hover:text-primary-300 text-sm text-ctext"
              href={'/' + item.replaceAll(' ', '-').toLowerCase()}
              onClick={props.toggle}>
              {item}
            </Link>
          ))}
        </div>
      </Collapse>
    </div>
  );
}
