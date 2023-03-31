// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperItem from './swiperItem';

const SwiperBanners = ({props}) => {
    
    return (
        <Swiper
        modules={[Navigation, Pagination]}        
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}  
        spaceBetween={24}
        >
            {props.map((item) => (
                <SwiperSlide>
                    <SwiperItem key={item.id} props={item}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
  };

export default SwiperBanners