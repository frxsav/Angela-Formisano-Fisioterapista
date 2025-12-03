import { LuActivity } from 'react-icons/lu';

export default function TreatmentPathologiesDetailed(props) {
  return (
    <div className="py-16 bg-white px-[10%]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-sm font-bold text-primary-300 uppercase tracking-widest mb-2">
          {props.pathologies.subtitle}
        </h3>
        <h2 className="text-3xl font-bold text-primary-900 mb-4 tracking-tighter">
          {props.pathologies.title}
        </h2>
        <p className="text-ctext/75 text-xl font-display">
          {props.pathologies.dsc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {props.pathologies.list.map((pathology, index) => (
          <div
            key={index}
            className="flex flex-col md:items-start items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all cursor-default text-center md:text-start">
            <div className="grid grid-cols-12 items-center md:justify-items-start justify-items-center gap-4 min-h-15">
              <div className="w-10 h-10 col-span-12 md:col-span-2 rounded-full bg-primary-100/20 flex items-center justify-center text-primary-100">
                <LuActivity className='text-xl'/>
              </div>
              <p className="text-lg col-span-12 md:col-span-10 font-roboto tracking-tighter text-primary-900 font-semibold">
                {pathology.title}
              </p>
            </div>
            <span className="text-lg font-display text-ctext/75">
              {pathology.dsc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
