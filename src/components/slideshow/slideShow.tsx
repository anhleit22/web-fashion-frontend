import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { ProductItem } from "../cartItem/ProductItem";
import { listproduct } from "../../data/mock-listproduct";

export const SlideShow: React.FC = () => {
  return (
    <div className="py-[50px] w-[1200px]  cursor-pointer">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        watchOverflow={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {listproduct.map((item) => (
          <div>
            <SwiperSlide>
              <ProductItem items={item} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};