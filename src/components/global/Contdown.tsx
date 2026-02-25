"use client";
import CountUp from "react-countup";

const countData = [
  {
    id: 1,
    para: "Projects Completed Successfully",
    title: "Projects Completed",
    value: 150,
    suffix: "+",
  },
  {
    id: 2,
    para: "Trusted and Satisfied Clients",
    title: "Happy Customers",
    value: 150,
    suffix: "+",
  },
  {
    id: 3,
    para: "High Success Rate with Clients",
    title: "Success Rate",
    value: 100,
    suffix: "%",
  },
  {
    id: 4,
    para: "Expertise Built for Years",
    title: "Years of Experience",
    value: 30,
    suffix: "+",
  },
];

function CountDown() {
  return (
    <section className="relative md:p-16 px-3 py-6 bg-gradient-to-b from-white to-zinc-50 border-y border-zinc-200 overflow-hidden">

      {/* subtle glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-color2/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-color2/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto sm:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-9 lg:gap-0">

          {countData.map((item, index) => (
            <div
              key={item.id}
              className={`group relative text-center p-2 sm:p-6 lg:px-10 transition-all duration-500
              ${index !== countData.length - 1 ? "lg:border-r border-zinc-200" : ""}
              `}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-color3/30 to-transparent rounded-xl" />

              {/* Title */}
              <h3 className="relative font-semibold text-lg sm:text-xl text-zinc-800 mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative text-zinc-500 text-sm md:text-base mb-6 max-w-[220px] mx-auto leading-relaxed">
                {item.para}
              </p>

              {/* Counter */}
              <div className="relative font-bold text-4xl md:text-5xl xl:text-6xl 
              bg-gradient-to-br from-color3 via-orange-500 to-yellow-600 
              bg-clip-text text-transparent tracking-tight">

                <CountUp
                  start={0}
                  end={item.value}
                  delay={0.2}
                  duration={2.5}
                  separator=","
                />
                <span>{item.suffix}</span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CountDown;