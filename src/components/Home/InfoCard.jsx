import React from 'react';

const InfoCard = ({ country }) => {
    return (
        <div className="group relative w-[85vw] md:w-[calc((100%-48px)/3)] h-[450px] rounded-3xl overflow-hidden shadow-lg shrink-0 cursor-pointer snap-start">
            <img
                src={country.img}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover block transition-transform duration-750 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />

            <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col justify-end pointer-events-none">

                <span className="text-amber-400 font-medium text-xs tracking-wider uppercase mb-1 transition-transform duration-300 group-hover:animate-text-bounce">
                    {country.toursCount} Tours Available
                </span>

                <h3 className="text-2xl font-bold font-title mb-2 tracking-wide transition-transform duration-300 group-hover:animate-text-bounce [animation-delay:75ms]">
                    Discover {country.name}
                </h3>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                        <p className="text-gray-300 text-sm leading-relaxed pt-1 opacity-0 group-hover:opacity-100 line-clamp-2 transition-all duration-500 delay-100 group-hover:animate-text-bounce [animation-delay:150ms]">
                            {country.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;