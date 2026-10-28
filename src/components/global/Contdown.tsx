const countData = [
  {
    id: 1,
    para: "Founded in New Delhi",
    value: "1997",
  },
  {
    id: 2,
    para: "Airports supported",
    value: "India+Nepal",
  },
  {
    id: 3,
    para: "Operations desk",
    value: "24/7",
  },
  {
    id: 4,
    para: "Flights supported",
    value: "1000+",
  },
];

function CountDown() {
  return (
    <section className="relative  px-3 py-6 bg-gradient-to-b from-white to-zinc-50 border-y border-zinc-200 overflow-hidden">

      {/* subtle glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-color2/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-color2/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative  px-6 mx-auto sm:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-9 lg:gap-0">

          {countData.map((item, index) => (
            <div
              key={item.id}
              className={`group relative text-center p-2 sm:p-6  transition-all duration-500
              ${index !== countData.length - 1 ? "lg:border-r border-zinc-200" : ""}
              `}
            >              

              {/* Description */}
              <p className="relative text-zinc-800  font-medium  md:text-xl text-base mb-6 max-w-[220px] mx-auto leading-relaxed">
                {item.para}
              </p>

              {/* Value */}
              <p className=" font-bold text-xl md:text-3xl xl:text-5xl 
             text-color2">
                {item.value}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CountDown;