import Timeline from './Timeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import experiences from '../assets/data/experiences.json'
import Description from './Description';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const About: React.FC = () => {
//TODO color of pagination must be brighter need maybe add side arrows
  return (
    <div className="border-neutral-900 pb-4 lg: px-20">
      <div className="container mx-auto pt-24 opacity-90">
        <h2 className="text-6xl font-bold text-center mb-24 text-white">
          About <span className="text-purple-500">Me</span>
        </h2>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-1/2 lg:p-2">
          <h2 className="mb-20 text-center bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                         bg-clip-text text-4xl leading-normal tracking-tight text-transparent">Experience</h2>
          <div className="flex items-center justify-center">
            <Timeline />
          </div>
        </div>
        <div className="w-full xl:w-1/2 lg:p-2 lg:mt-7">
          <h2 className="mb-15 text-center bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500
                         bg-clip-text text-4xl leading-normal tracking-tight text-transparent">More Details</h2>
          <div className="flex items-center justify-center p-8">
            <div className="carousel-holder p-8">
            <>
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
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
                >
                {experiences.map((experience, index) => (
                  <SwiperSlide className=" mb-15 ">
                    <Description key={index} experience={experience} />
                  </SwiperSlide>
                ))}
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
