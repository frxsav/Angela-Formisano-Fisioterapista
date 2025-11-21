import Image from 'next/image';

export default function TreatmentBody(props) {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-64 gap-16 px-[10%]">
      <div className="flex flex-col lg:gap-8 gap-6">
        <div className='flex flex-col gap-3'>
          <h1
            className="lg:text-5xl text-4xl lg:text-start text-center font-title font-bold text-primary-900 text-shadow-xs"
            dangerouslySetInnerHTML={{ __html: props.therapy.title }}></h1>
          <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
        </div>
        <h2
          className="lg:text-3xl text-2xl font-bold lg:text-start text-center font-title text-ctext text-shadow-xs"
          dangerouslySetInnerHTML={{ __html: props.therapy.subtitle }}></h2>
        <p
          className="font-text text-ctext/90 md:text-2xl text-xl md:pt-0 pt-8"
          dangerouslySetInnerHTML={{ __html: props.therapy.dsc }}></p>
        <ul className="grid grid-cols-12 gap-3 list-disc pl-6 text-ctext text-xl font-text">
          {props.therapy.list.map((item, index) => (
            <li className="lg:col-span-4 col-span-12 lg:pr-3" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={props.therapy.img}
        alt="Laserterapia"
        width={500}
        height={500}
        className="rounded-[5rem] bg-primary-300/25"
      />
    </div>
  );
}
