import { HiMiniPlay } from 'react-icons/hi2';
import { timelineItems } from '@/lib/data';

export default function Timeline() {
  return (
    <div className="flex flex-col w-[80%] self-center pt-32">
      {timelineItems.map((item, index) => (
        <div
          className="md:grid grid-cols-12 flex flex-col md:gap-0 gap-4 items-center relative py-8"
          key={index}>
          <div
            className={`flex flex-row md:col-span-4 col-span-12 items-center gap-2 md:text-start text-center z-40 ${
              (index + 1) % 2 === 0
                ? /**Pari */
                  'md:order-3 order-2 md:pl-8 pl-0 md:col-start-7'
                : /**Dispari */
                  'md:pr-8 pr-0 md:order-1 md:col-start-3'
            }`}>
            <div className="bg-white flex flex-col gap-4 p-4 rounded-3xl shadow-md">
              <h4 className="text-2xl font-bold font-title text-primary-900">
                {item.title}
              </h4>
              <p className="text-ctext/90 font-text text-xl">{item.dsc}</p>
            </div>
          </div>
          <div className="bg-cta-100 w-[2px] h-full absolute top-0 col-span-6 left-1/2 -translate-x-1/2 z-30"></div>
          <div className="w-[40px] h-[40px] rounded-full bg-cta-100/50 justify-self-center p-2 md:absolute relative md:left-1/2 md:-translate-x-1/2 z-30 md:order-2 order-3">
            <div className="w-full h-full bg-cta-100 rounded-full"></div>
          </div>
          <div
            className={`flex flex-row items-center gap-2 col-span-2 md:relative absolute left-0 top-0 z-50 ${
              (index + 1) % 2 === 0
                ? /**Pari */
                  'justify-self-end md:pr-8 pr-0 col-end-7 md:order-1'
                : /**Dispari */
                  'justify-self-start md:pl-8 pl-0 md:order-3'
            }`}>
            <HiMiniPlay
              className={`rotate-90 text-cta-100 text-lg ${
                (index + 1) % 2 === 0
                  ? /**Pari */
                    'md:rotate-0 md:order-2'
                  : /**Dispari */
                    'md:rotate-180 md:order-1'
              }`}
            />
            <p
              className={`text-xl font-text font-bold text-ctext ${
                (index + 1) % 2 === 0
                  ? /**Pari */
                    'md:order-1'
                  : /**Pari */
                    'order-2'
              }`}>
              {item.year}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
}
