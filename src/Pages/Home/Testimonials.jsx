import SectionTitle from "../../Components/SectionTitle";
import { Navigation } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { useEffect, useState } from "react";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section>
            <SectionTitle 
            subHeading={'What Our Client Say'}
            heading={'Testimonial'}
            >

            </SectionTitle>
        
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="w-10/12 mx-auto my-16">
                        <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                            <p> {review.details} </p>
                            <h3 className="text-2xl text-orange-400"> {review.name} </h3>
                        </div>

                    </SwiperSlide> )
                }
            </Swiper>
            
        </section>
    );
};

export default Testimonials;