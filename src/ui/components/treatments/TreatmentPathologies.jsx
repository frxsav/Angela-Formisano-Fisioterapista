import { LuActivity } from 'react-icons/lu';

export default function TreatmentPathologies(props) {
  return (
    <div className="py-16 bg-white px-[10%]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-sm font-bold text-primary-300 uppercase tracking-widest mb-2">
          {props.pathologies.subtitle}
        </h3>
        <h2 className="text-3xl font-bold text-primary-900 mb-4">
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
            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all cursor-default">
            <div className="w-10 h-10 rounded-full bg-primary-100/20 flex items-center justify-center text-primary-100">
              <LuActivity />
            </div>
            <span className="text-lg font-roboto tracking-tight text-ctext">{pathology}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
