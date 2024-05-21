
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';

import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
                subHeading={'From 11.00am to 10.00pm'}
                heading={'Order Online'}>
                
            </SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className='uppercase  text-center font-bold  text-white text-2xl'> Salads </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className='uppercase -mt-16 text-center font-bold text-white text-2xl'> Pizza </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className='uppercase -mt-16 text-center font-bold text-white text-2xl'> Soups </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className='uppercase -mt-16 text-center font-bold text-white text-2xl'> Cake </h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className='uppercase -mt-16 text-center font-bold text-white text-2xl'> Salads </h3>
        </SwiperSlide>
        
        
        </Swiper>
        </section>
    );
};

export default Category;