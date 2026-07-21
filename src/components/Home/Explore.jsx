import React from 'react'
import ExploreBg from '../../assets/ExploreBg.png'
import ExplorePanel from '../../assets/ExplorePanel.png'
import SingleReview from './SingleReview'

const Explore = () => {

  const reviews = [
    {
      id: 1,
      name: "Tanmay Rongre",
      tourName: "Action Safari",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFaUczrp-T4Jw/profile-displayphoto-scale_400_400/B4DZ7uPWF.J4Ag-/0/1782113463737?e=1785974400&v=beta&t=ff81csaa05CpH6JwsIqVVvwMAbb6jTN1v03aDIheyu4",
      comment: "The Action Safari was an experience I will never forget. Every detail was perfectly arranged — from the jeep rides at sunrise to the campfire dinners under the stars. Turio made it completely stress-free and magical. Our guide has all the knowledge"
    },
    {
      id: 2,
      name: "Shubh Chincholkar",
      tourName: "Mountain Trekking",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D5603AQEtc5jejclZ2Q/profile-displayphoto-scale_400_400/B56Z5rRPzfIsAg-/0/1779916144851?e=1785974400&v=beta&t=pij5249SMPJGd5vBRl9aAfwI6FPUzXTi6CAqiRF53_s",
      comment: "Mountain Trekking with Turio was beyond my expectations. The guides were knowledgeable, the routes were breathtaking, and the team ensured our safety at every step. I came back with memories that will last a lifetime."
    },
    {
      id: 3,
      name: "Supesh Ugale",
      tourName: "Deep Ocean Diving",
      rating: 5,
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFjQldLh9__Kw/profile-displayphoto-scale_400_400/B4DZ7MoKACGYAg-/0/1781549540525?e=1785974400&v=beta&t=PKu6zA121v1bi-Z7yKPBiatKIrazDZgylgaX8A9Y1gE",
      comment: "I booked the Deep Ocean Diving package on a whim and it turned out to be the best decision of my life. The crew was professional, the underwater world was stunning, and Turio handled everything flawlessly from start to finish."
    }
  ];

  return (
    <div className="w-full bg-black flex flex-col md:flex-row min-h-[60vh]">

      <div className="w-full md:flex-1 relative overflow-hidden group flex justify-center flex-col items-center py-16 md:py-0 min-h-[50vh]">

        {/* Animated Background */}
        <img
          src={ExploreBg}
          alt="Explore Background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 ease-out scale-105 group-hover:-translate-x-4"
        />

        {/* Content container - needs relative z-10 to sit above the image */}
        <div className="relative z-10 text-center flex flex-col items-center gap-10">
          <div className="flex items-center flex-col">
            <h2 className="font-cursive text-4xl md:text-5xl font-bold text-amber-400 leading-tight">
              adventure
            </h2>

            <h2 className="text-3xl md:text-5xl font-bold text-white font-title leading-tight mt-2">
              Dare to Explore
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-7 max-w-[90%] md:max-w-[70%] text-center">Exploring means learning. Bring new experiences from each journey. Meet different cultures, traditions and landscapes. Choose your next destination and start your trip.</p>

          <button
            id="see-more-btn"
            className="hover:scale-110 duration-300 text-[#FFCC05] text-[12px] font-semibold tracking-[0.2em] uppercasecursor-pointer border-b-2 transition-transform "
          >
            SEE MORE
          </button>
        </div>
      </div>
      <img className="w-full md:w-[50%] h-[40vh] md:h-auto object-cover object-center" src={ExplorePanel} alt="Explore" />
    </div>
  )
}

export default Explore