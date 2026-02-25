import React from "react";
import Gallery from "./gallery";

function Projectdetail({ data }: any) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="lg:px-28 md:px-20 sm:px-16 px-7 pt-12 md:pt-20 pb-8">
          <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="mb-8 md:mb-12">
                            
              <h1 className="font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4 leading-tight font1">
                {data?.title}
              </h1>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl text-color2 font-bold text-brown2 max-w-4xl leading-relaxed">
                {data?.text}
              </h3>
            </div>

            {/* Project Details Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {data?.detail?.map((card: any, index: number) => (
                <div
                  className="relative bg-white border-2 border-gray-100 rounded-2xl p-5 md:p-6 hover:border-brown2/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                  key={index}
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brown2/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-brown2/70 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 group-hover:text-brown2 transition-colors font2">
                      {card?.heading}
                    </h4>
                    <h5 className="text-blue-900 text-lg sm:text-xl md:text-2xl font-bold group-hover:text-brown2 transition-colors">
                      {card?.info}
                    </h5>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brown2 to-brown2/50 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="lg:px-28 md:px-20 sm:px-16 px-7">
          <div className="max-w-7xl mx-auto">
            <Gallery imgs={data?.imgs} />
          </div>
        </div>

        {/* Description Section */}
        <div className="lg:px-28 md:px-20 sm:px-16 px-7 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 lg:p-16">
              {/* Section Header */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-brown2 to-brown2/30 rounded-full"></div>
                  <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl text-gray-900 font1">
                    Description
                  </h2>
                </div>
                <div className="w-24 h-1 bg-brown2 rounded-full"></div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-6 md:space-y-8">
                {data?.para?.map((paragraph: string, index: number) => (
                  <p
                    className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose font2"
                    key={index}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-0 right-0 w-96 h-96 bg-brown2/5 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-brown2/5 rounded-full blur-3xl -z-10 opacity-50"></div>
      </div>
    </>
  );
}

export default Projectdetail;