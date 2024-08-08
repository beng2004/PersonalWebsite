import Timeline from './Timeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import experiences from '../assets/data/experiences.json';
import Description from './Description';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import pfp from '../assets/pfp.jpg';

const About: React.FC = () => {
  // TODO color of pagination must be brighter need maybe add side arrows
  return (

    <div className="container mx-auto border-neutral-900 pt-4 pb-4 lg:px-20">
      <div className="mt-6 flex flex-wrap">
        {/* Row 1: Profile Picture */}
        
        <div className="w-full xl:w-1/2 flex justify-center p-4">
            <img src={pfp} className="w-auto rounded-full" alt="Profile" />
        </div>
        <div className="w-full xl:w-1/2 flex items-center justify-center p-4">
          <h2 className="text-center bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                         bg-clip-text text-6xl leading-normal tracking-tight text-transparent">My Experience</h2>
        </div>

        {/* Row 2: Timeline */}
        <div className="w-full xl:w-1/2 flex justify-center p-4">
          {/* leave empty for space*/}
        </div>
        <div className="w-full xl:w-1/2 flex items-center justify-center p-4">
          <Timeline />
        </div>

        {/* Row 3: Experience Details */}
        <div className="w-full xl:w-1/2 flex justify-center p-4">
          <h2 className="text-center bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                         bg-clip-text text-4xl leading-normal tracking-tight text-transparent">More Details</h2>
        </div>
        <div className="w-full xl:w-1/2 flex items-center justify-center p-4">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {experiences.map((experience, index) => (
              <SwiperSlide key={index} className="mb-15">
                <Description experience={experience} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
