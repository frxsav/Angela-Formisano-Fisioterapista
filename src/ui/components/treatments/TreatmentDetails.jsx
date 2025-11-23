import Image from 'next/image';

export default function (props) {
  return (
    <section id="trattamenti" className="py-16 relative">
      <div className="px-[10%] flex flex-col gap-16">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
            Le Mie Tecnologie
          </h2>
          <div className="border-t-5 border-primary-300 h-[1px] w-[100px]"></div>
          <p className="text-xl text-ctext/75 max-w-2xl mt-4 font-text">
            Utilizzo macchinari di ultima generazione per garantire la massima
            efficacia terapeutica. Ecco nel dettaglio le terapie che offro
            presso il mio studio di Ercolano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.therapies.map((therapy, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <Image
                  src="/images/terapia.webp"
                  alt={therapy.title + ' Image'}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white tracking-wide">
                  {therapy.title}
                </h3>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-ctext/75 mb-6 text-lg font-text">
                  {therapy.dsc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
