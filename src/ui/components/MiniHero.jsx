export default function MiniHero(props) {
  return (
    <div className="min-h-[60vh] w-full bg-[url('/images/trattamento-riabilitazione-posturale.webp')] bg-no-repeat bg-cover bg-center z-10 relative">
      <div className="absolute top-0 w-full h-full bg-primary-900/50"></div>
      <h4 className="absolute bottom-0 lg:left-[10%] left-0 text-6xl text-shadow-ctext text-shadow-md text-secondary-light font-semibold pb-2 italic">
        {props.title}
      </h4>
    </div>
  );
}
