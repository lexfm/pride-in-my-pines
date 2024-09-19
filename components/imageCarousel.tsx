import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';



const ImageCarousel = () => {
  // Array of images from the /public folder
  const images = [
    '/testimonials/Jeff.png',
    '/testimonials/Acostado.png',
    '/testimonials/Conchas.png',
    '/testimonials/Lago.png',
    '/testimonials/Teatro.png',
    '/testimonials/Agusto.png',
    '/testimonials/Grupo.png',
    '/testimonials/Bbq.png',
    '/testimonials/Bonitos.png',
    '/testimonials/BonitosDias.png',
    '/testimonials/InLove.png'
  ];

  return (
    <div className="w-full h-auto relative carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={400} // Set an appropriate width
                height={200} // Set an appropriate height
                objectFit="cover"
                className="object-cover w-full h-[300px] md:h-[500px]"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );

};


export default ImageCarousel;
