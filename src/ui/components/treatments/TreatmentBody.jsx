import Image from 'next/image';

export default function TreatmentBody(props) {
  const titleArray = [];
  const subtitleArray = [];
  const dscArray = [];

  props.therapy.title.split('<br/>').forEach((element) => {
    titleArray.push(element);
  });
  props.therapy.subtitle.split('<br/>').forEach((element) => {
    subtitleArray.push(element);
  });
  props.therapy.dsc.split('<br/>').forEach((element) => {
    dscArray.push(element);
  });
  return (
    <div className="flex lg:flex-row flex-col lg:gap-64 gap-16 px-[10%]">
      <div className="flex flex-col lg:gap-8 gap-6">
        <div className="flex flex-col gap-3">
          {titleArray.map((item, index) => (
            <h1
              key={index}
              className="lg:text-5xl text-4xl lg:text-start text-center font-title font-bold text-primary-900 text-shadow-xs">
              {item}
            </h1>
          ))}
          <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
        </div>
        {subtitleArray.map((item, index) => (
          <h2
            key={index}
            className="lg:text-3xl text-2xl font-bold lg:text-start text-center font-title text-ctext text-shadow-xs">
            {item}
          </h2>
        ))}
        {dscArray.map((item, index) => (
          <p
            key={index}
            className="font-text text-ctext/90 md:text-2xl text-xl md:pt-0 pt-8">
            {item}
          </p>
        ))}
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
